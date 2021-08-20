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
import { useLayoutEffect, useEffect, useState } from "react";

let hasHydrated = false;
let id = 0;

/**
 * Returns an incremented id number
 *
 * @returns {number}
 */
const generateIncrementalId = () => ++id;

/**
 * Generate automatic IDs to facilitate WAI-ARIA
 *
 * The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 */
function useAutoId(customId: string): string;
function useAutoId(customId: string | undefined): string | undefined;
function useAutoId(customId?: null): string | undefined;
function useAutoId(customId?: string | null) {
	const initialId = customId || (hasHydrated ? generateIncrementalId() : null);
	const [id, setId] = useState(initialId);

	/*
	 * Patch the ID after render to avoid any rendering flicker.
	 */
	useLayoutEffect(() => {
		if (id === null) {
			setId(generateIncrementalId());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

	return id != null ? String(id) : undefined;
}

export { useAutoId };
