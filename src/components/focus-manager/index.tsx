/* eslint-disable consistent-return */

/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 feedzai.com, Rights Reserved.
 */
import React, { FunctionComponent, RefObject, useEffect, useRef } from "react";
import { useSafeLayoutEffect } from "../../hooks/index";
import { focusSafely } from "./helpers/focus-safely";
import { isElementInAnyScope, isElementInScope } from "./helpers/element-in-scope";
import { FocusContext } from "./context";
import { FOCUSABLE_ELEMENT_SELECTOR, TABBABLE_ELEMENT_SELECTOR } from "./constants";

export interface IFocusManagerProps {
  /**
   * Whether to contain focus inside the scope, so users cannot
   * move focus outside, for example in a modal dialog.
   */
  contain?: boolean;

  /**
   * Whether to restore focus back to the element that was focused
   * when the focus scope mounted, after the focus scope unmounts.
   */
  restoreFocus?: boolean;

  /** Whether to auto focus the first focusable element in the focus scope on mount. */
  autoFocus?: boolean;
}

export interface IFocusManagerOptions {
  /** The element to start searching from. The currently focused element by default. */
  from?: HTMLElement;
  /** Whether to only include tabbable elements, or all focusable elements. */
  tabbable?: boolean;
  /** Whether focus should wrap around when it reaches the end of the scope. */
  wrap?: boolean;
}

export interface IFocusManager {
  /** Moves focus to the first focusable or tabbable element in the focus scope. */
  focusFirst(opts?: IFocusManagerOptions): HTMLElement | undefined;

  /** Moves focus to the next focusable or tabbable element in the focus scope. */
  focusNext(opts?: IFocusManagerOptions): HTMLElement | undefined;

  /** Moves focus to the previous focusable or tabbable element in the focus scope. */
  focusPrevious(opts?: IFocusManagerOptions): HTMLElement | undefined;

  /** Moves focus to the last focusable or tabbable element in the focus scope. */
  focusLast(opts?: IFocusManagerOptions): HTMLElement | undefined;
}

export interface IUseRestoreFocus {
  items: RefObject<HTMLElement[]>;
  restoreFocus?: boolean;
  contain?: boolean;
}

let activeScope: RefObject<HTMLElement[]> | null = null;
const scopes: Set<RefObject<HTMLElement[]>> = new Set();

/**
 *
 *
 * @param {React.RefObject<HTMLElement[]>} items
 * @returns {IFocusManager}
 */
function createFocusManager(items: React.RefObject<HTMLElement[]>): IFocusManager {
  return {
    focusFirst(opts: IFocusManagerOptions = {}): HTMLElement | undefined {
      const focusable = getFocusableElementsInScope(items.current, opts);
      if (focusable) {
        const nextNode = focusable[0];
        nextNode.focus();
        return nextNode;
      }

      return undefined;
    },

    focusPrevious(opts: IFocusManagerOptions = {}): HTMLElement | undefined {
      const node = opts.from || document.activeElement;
      const focusable = getFocusableElementsInScope(items.current, opts).reverse();
      let previousNode = focusable.find(
        (n) =>
          !!(
            node &&
            node.compareDocumentPosition(n) &
              (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)
          )
      );
      if (!previousNode && opts.wrap) {
        previousNode = focusable[0];
      }
      if (previousNode) {
        previousNode.focus();
        return previousNode;
      }

      return undefined;
    },

    focusNext(opts: IFocusManagerOptions = {}): HTMLElement | undefined {
      const node = opts.from || document.activeElement;
      const focusable = getFocusableElementsInScope(items.current, opts);
      let nextNode = focusable.find(
        (n) =>
          !!(
            node &&
            node.compareDocumentPosition(n) &
              (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)
          )
      );
      if (!nextNode && opts.wrap) {
        nextNode = focusable[0];
      }
      if (nextNode) {
        nextNode.focus();
        return nextNode;
      }

      return undefined;
    },

    focusLast(opts: IFocusManagerOptions = {}): HTMLElement | undefined {
      const focusable = getFocusableElementsInScope(items.current, opts);

      if (focusable) {
        const nextNode = focusable[focusable.length - 1];
        nextNode.focus();
        return nextNode;
      }

      return undefined;
    },
  };
}

/**
 * Returns an array of HTML Elements that can receive focus within the scope
 *
 * @param {(HTMLElement[] | null)} scope
 * @param {IFocusManagerOptions} opts
 * @returns {HTMLElement[]}
 */
function getFocusableElementsInScope(
  scope: HTMLElement[] | null,
  { tabbable }: IFocusManagerOptions
): HTMLElement[] {
  const res: HTMLElement[] = [];
  const selector = tabbable ? TABBABLE_ELEMENT_SELECTOR : FOCUSABLE_ELEMENT_SELECTOR;

  if (scope) {
    for (const node of scope) {
      if (node.matches(selector)) {
        res.push(node);
      }

      const selectors: HTMLElement[] = Array.from(node.querySelectorAll(selector));

      res.push(...selectors);
    }
  }

  return res;
}

/**
 *
 *
 * @param {RefObject<HTMLElement[]>} scopeRef
 * @param {boolean} [contain]
 */
function useFocusContainment(scopeRef: RefObject<HTMLElement[]>, contain?: boolean): void {
  const focusedNode = useRef<HTMLElement>();
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!contain) {
      return;
    }

    // Handle the Tab key to contain focus within the scope
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      const focusedElement = document.activeElement as HTMLElement;
      if (!isElementInScope(focusedElement, scope)) {
        return;
      }

      const elements = getFocusableElementsInScope(scope, { tabbable: true });
      const position = elements.indexOf(focusedElement);
      const lastPosition = elements.length - 1;
      let nextElement = null;

      if (event.shiftKey) {
        if (position <= 0) {
          nextElement = elements[lastPosition];
        } else {
          nextElement = elements[position - 1];
        }
      } else {
        if (position === lastPosition) {
          nextElement = elements[0];
        } else {
          nextElement = elements[position + 1];
        }
      }

      event.preventDefault();

      if (nextElement) {
        focusElement(nextElement, true);
      }
    };

    /**
     * If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
     * restore focus to the previously focused node or the first tabbable element in the active scope.
     * @param {any} event
     */
    const onFocus = (event: any) => {
      const isInAnyScope = isElementInAnyScope(event.target, scopes);

      if (!isInAnyScope) {
        if (focusedNode.current) {
          focusedNode.current.focus();
        } else if (activeScope) {
          focusFirstInScope(activeScope.current);
        }
      } else {
        activeScope = scopeRef;
        focusedNode.current = event.target;
      }
    };

    /**
     *
     * @param event
     */
    const onBlur = (event: any) => {
      raf.current = requestAnimationFrame(() => {
        // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
        const isInAnyScope = isElementInAnyScope(document.activeElement, scopes);

        if (!isInAnyScope) {
          activeScope = scopeRef;
          focusedNode.current = event.target;
          focusedNode?.current?.focus();
        }
      });
    };

    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("focusin", onFocus, false);
    scope?.forEach((element) => element.addEventListener("focusin", onFocus, false));
    scope?.forEach((element) => element.addEventListener("focusout", onBlur, false));

    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
      document.removeEventListener("focusin", onFocus, false);
      scope?.forEach((element) => element.removeEventListener("focusin", onFocus, false));
      scope?.forEach((element) => element.removeEventListener("focusout", onBlur, false));
    };
  }, [scopeRef, contain]);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      if (raf.current) {
        return cancelAnimationFrame(raf.current);
      }
    };
  }, [raf]);
}

/**
 *
 *
 * @param {(HTMLElement | null)} element
 * @param {boolean} [scroll=false]
 */
function focusElement(element: HTMLElement | null, scroll = false) {
  if (element != null && !scroll) {
    try {
      focusSafely(element);
    } catch (err) {
      // ignore
    }
  } else if (element != null) {
    try {
      element.focus();
    } catch (err) {
      // ignore
    }
  }
}

/**
 * Sets the focus on the first element on the scope.
 *
 * @param {(HTMLElement[] | null)} scope
 */
function focusFirstInScope(scope: HTMLElement[] | null) {
  const elements = getFocusableElementsInScope(scope, { tabbable: true });
  focusElement(elements[0]);
}

/**
 * @param {RefObject<HTMLElement[]>} items
 * @param {boolean} [autoFocus]
 */
function useAutoFocus(items: RefObject<HTMLElement[]>, autoFocus?: boolean) {
  useEffect(() => {
    if (autoFocus) {
      activeScope = items;
      if (!isElementInScope(document.activeElement, activeScope.current)) {
        focusFirstInScope(items.current);
      }
    }
  }, [items, autoFocus]);
}

/**
 * Restores focus onto the HTML element that was used before initiating the `FocusManager`
 *
 * @param {IUseRestoreFocus} props
 */
function useRestoreFocus({ items, restoreFocus, contain }: IUseRestoreFocus): void {
  useSafeLayoutEffect(() => {
    const scope = items.current;
    const nodeToRestore = document.activeElement as HTMLElement;

    // Handle the Tab key so that tabbing out of the scope goes to the next element
    // after the node that had focus when the scope mounted. This is important when
    // using portals for overlays, so that focus goes to the expected element when
    // tabbing out of the overlay.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      const focusedElement = document.activeElement as HTMLElement;
      if (!isElementInScope(focusedElement, scope)) {
        return;
      }

      // Create a DOM tree walker that matches all tabbable elements
      const walker = getFocusableTreeWalker(document.body, { tabbable: true });

      // Find the next tabbable element after the currently focused element
      walker.currentNode = focusedElement;
      let nextElement = (event.shiftKey ? walker.previousNode() : walker.nextNode()) as HTMLElement;

      // If there is no next element, or it is outside the current scope, move focus to the
      // next element after the node to restore to instead.
      if ((!nextElement || !isElementInScope(nextElement, scope)) && nodeToRestore) {
        walker.currentNode = nodeToRestore;

        // Skip over elements within the scope, in case the scope immediately follows the node to restore.
        do {
          nextElement = (event.shiftKey ? walker.previousNode() : walker.nextNode()) as HTMLElement;
        } while (isElementInScope(nextElement, scope));

        event.preventDefault();
        event.stopPropagation();
        if (nextElement) {
          nextElement.focus();
        } else {
          // If there is no next element, blur the focused element to move focus to the body.
          focusedElement.blur();
        }
      }
    };

    if (!contain) {
      document.addEventListener("keydown", onKeyDown, true);
    }

    return () => {
      if (!contain) {
        document.removeEventListener("keydown", onKeyDown, true);
      }

      if (restoreFocus && nodeToRestore) {
        requestAnimationFrame(() => {
          if (document.body.contains(nodeToRestore)) {
            focusElement(nodeToRestore);
          }
        });
      }
    };
  }, [items, restoreFocus, contain]);
}

/**
 * An object that represents the nodes that matches all focusable/tabbable elements.
 *
 * Based on `react-aria`'s implementation.
 * {@link https://react-spectrum.adobe.com/react-aria/}
 *
 * @export
 * @param {HTMLElement} root
 * @param {IFocusManagerOptions} [opts]
 * @returns {TreeWalker}
 */
function getFocusableTreeWalker(root: HTMLElement, opts?: IFocusManagerOptions): TreeWalker {
  const selector = opts?.tabbable ? TABBABLE_ELEMENT_SELECTOR : FOCUSABLE_ELEMENT_SELECTOR;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      // Skip nodes inside the starting node.
      if (opts?.from?.contains(node)) {
        return NodeFilter.FILTER_REJECT;
      }

      if ((node as HTMLElement).matches(selector)) {
        return NodeFilter.FILTER_ACCEPT;
      }

      return NodeFilter.FILTER_SKIP;
    },
  });

  if (opts?.from) {
    walker.currentNode = opts.from;
  }

  return walker;
}

/**
 * A FocusManager manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 *
 * @export
 * @param {FunctionComponent<IFocusManagerProps>} props
 * @returns {JSX.Element}
 */
export const FocusManager: FunctionComponent<IFocusManagerProps> = ({
  children,
  contain,
  restoreFocus,
  autoFocus,
}): JSX.Element => {
  const initial = useRef<HTMLSpanElement>(null);
  const final = useRef<HTMLSpanElement>(null);
  const items = useRef<HTMLElement[]>([]);

  useSafeLayoutEffect(() => {
    // Find all rendered nodes between the sentinels and add them to the scope.
    let node = initial?.current?.nextSibling;
    const nodes = [];
    while (node && node !== final.current) {
      nodes.push(node);
      node = node.nextSibling;
    }

    items.current = nodes as HTMLElement[];
    scopes.add(items);
    return () => {
      scopes.delete(items);
    };
  }, [children]);

  useFocusContainment(items, contain);
  useRestoreFocus({
    items,
    restoreFocus,
    contain,
  });
  useAutoFocus(items, autoFocus);

  const value = createFocusManager(items);

  return (
    <FocusContext.Provider value={value}>
      <span hidden ref={initial} data-testid="js-focus-manager-guard-initial" />
      {children}
      <span hidden ref={final} data-testid="js-focus-manager-guard-final" />
    </FocusContext.Provider>
  );
};

FocusManager.displayName = "FocusManager";

export * from "./useFocusManager";
export * from "./consumer";
