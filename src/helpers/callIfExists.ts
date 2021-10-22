import { isFunction } from "../helpers";

/**
 * Executes the given callback function, if present.
 *
 * @param {Function|undefined} callback Holds the callback to be executed.
 * @param {any[]} args Holds a list of arguments to be passed to the callback.
 * @private
 */
export function callIfExists<T>(callback: T, ...args: any[]): T | void {
	if (isFunction(callback)) {
		// eslint-disable-next-line prefer-spread
		callback.apply(undefined, args);
	}
}
