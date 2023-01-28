/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * useAutoId.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { makeId } from "../helpers";
import { useSafeLayoutEffect } from "./useSafeLayoutEffect";

let hasHydrated = false;
let id = 0;

/**
 * Returns an incremented id number
 *
 * @returns {number}
 */
const generateIncrementalId = () => ++id;

// Workaround for https://github.com/webpack/webpack/issues/14814
// https://github.com/eps1lon/material-ui/blob/8d5f135b4d7a58253a99ab56dce4ac8de61f5dc1/packages/mui-utils/src/useId.ts#L21
const getIdFromReactUseId: undefined | (() => string) = (React as any)[
	"useId".toString()
];

/**
 * Generate automatic IDs to facilitate WAI-ARIA
 *
 * The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @example
 *
 * // Generating an id (no pre-defined id and no prefix)
 * const id1 = useAutoId(); // will return, for example, "0"
 *
 * // Using a pre-defined id (no prefix)
 * const id2 = useAutoId("8e88aa2e-e6a8") // will return "8e88aa2e-e6a8"
 *
 * // Using a prefix with an auto-generated id (no pre-defined id)
 * const id3 = useAutoId(undefined, "fdz-prefix") // will return, for example, "fdz-prefix--10"
 *
 * // Using a prefix with a pre-defined id
 * const id4 = useAutoId("6949d175", "fdz-js-checkbox") // will return "fdz-js-checkbox--6949d175"
 *
 * @param {string | null | undefined} customId - You can pass an previously defined value
 * and that value will be used as the value of the returned id.
 * @param {string | undefined} prefix - If necessary, you can prepend a generated id with a prefix.
 * @returns {string | undefined} an auto/self-generated id with a possible prefix
 */
function useAutoId(customId?: string | null, prefix?: string): string | undefined {
	/**
	 * Since React v18, `useId` is a hook exported by React which also does the job of generating id automatically
	 * If the project is using version 18 or above, then we don't want to be doing the job that React already does,
	 * so we take advantage of the hook and add, if necessary, a prefix.
	 * */
	if (getIdFromReactUseId !== undefined) {
		const autoId = getIdFromReactUseId();
		const generatedId = customId ?? autoId;

		return prefix ? makeId(prefix, generatedId) : generatedId;
	}

	const { current: idPrefix } = useRef(prefix);
	const initialId = customId || (hasHydrated ? generateIncrementalId() : null);
	const [id, setId] = useState(initialId);

	/*
	 * Patch the ID after render to avoid any rendering flicker.
	 */
	useSafeLayoutEffect(() => {
		if (id === null) {
			setId(generateIncrementalId());
		}
	}, []);

	/*
	 * Flag all future uses of `useAutoId` to skip the updating cycle.
	 * We use `useEffect` because it happens after `useLayoutEffect`.
	 * This way we make sure that we complete the patch process until the end.
	 */
	useEffect(() => {
		if (hasHydrated === false) {
			hasHydrated = true;
		}
	}, []);

	const finalId = useMemo(() => {
		if (!id) {
			return undefined;
		}

		const finalId = String(id);

		return prefix ? makeId(prefix, finalId) : finalId;
	}, [id, idPrefix]);

	return finalId;
}

export { useAutoId };
