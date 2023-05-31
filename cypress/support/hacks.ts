const RESIZE_OBSERVER_LOOP_ERROR = /^[^(ResizeObserver loop limit exceeded)]/;

/**
 * When an exception has origin on an unhandled promise rejection,
 * that promise is provided as a third argument.
 * On those cases, we can turn the failing off.
 */
function handleOnUncaughtException(error: Error, _: Mocha.Runnable, promise: Promise<any>): false | undefined  {
	const isResizeObserverLoop = RESIZE_OBSERVER_LOOP_ERROR.test(error.message);
	const isUnhandledPromiseRejection = !!(promise);
	const shouldSupressError = Boolean(isResizeObserverLoop || isUnhandledPromiseRejection);

	if(!shouldSupressError) {
		return;
	}

	return false;
}

// eslint-disable-next-line consistent-return
Cypress.on("uncaught:exception", handleOnUncaughtException);
