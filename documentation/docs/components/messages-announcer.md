---
sidebar_position: 1
---

# Messages Announcer

It is common on single-page web apps that assistive technologies completely ignore significant changes happening inside a page, mainly because we manipulate the DOM with JavasScript.

Like the `RouteAnnouncer`, with the `MessagesAnnoucer`, we create an ARIA live region that the assistive technologies will monitor. So, any changes that you push to this component, a screen-reader will announce them.

## How to operate this demo

- Start your screen-reader (like `VoiceOver` or `Narrator`)
- Focus on the "Pay" button.
- Notice that a message will be displayed.
- However, the screen-reader will output a different and more meaningful message.

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## State Management

The component takes advantage of React's `Context` API to use the updater function anywhere inside the `MessagesAnnouncer` children.

## With Functional Components

To dispatch messages inside a functional component, you can take advantage of the `useMessageAnnouncer` custom hook.

First, import the hook at the top of the file:

```jsx
import { useMessageAnnouncer } from "@feedzai/react-a11y-tools";
```

Then, after you've defined your component, save the hook to a constant:

```jsx
function YourComponent(props) {
	const setMessage = useMessageAnnouncer();
```

Finally, use the function whenever you'd like to announce something.

```jsx
function onClick() {
	setMessage("The user has performed an action that it will be announced!");
}

return (
	<button type="button" onClick={onClick}>
		Send Message
	</button>
);
```

## Forms

You can use component to wrap the contents of a form, for instance.
This renders the form and, alongside it, the ARIA live region.

```jsx
import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";
...
return (
	<MessagesAnnouncer>
		<form onSubmit={handleOnSubmit}>
			...
		</form>
	</MessagesAnnouncer>
);
```

## Global usage

To have the announcer available for the whole app, consider wrapping the content with it. This way, you can access the `setMessage` function from any component inside.

```jsx
import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";
...
return (
	<MessagesAnnouncer>
		<YourComponent />
	</MessagesAnnouncer>
);
```

## With Route Announcer

You can use the `MessageAnnouncer` along with the `RouteAnnouncer`.
However, we recommend that you still place the `RouteAnnouncer` at the top and then inside it, the `MessagesAnnouncer`.

```jsx
import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";
...
return (
	<RouteAnnouncer pathname={pathname}>
		<MessagesAnnouncer>
			<YourComponent />
		</MessagesAnnouncer>
	</RouteAnnouncer>
);
```
