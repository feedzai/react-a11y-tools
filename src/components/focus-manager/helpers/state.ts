export default function createFocusManagerState() {
	const HAS_SCOPE = !!window.__react_a11y_tools_scopes__;

	if (!HAS_SCOPE) {
		window.__react_a11y_tools_scopes__ = new Set();
	}
}
