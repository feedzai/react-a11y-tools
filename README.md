# @feedzai/a11y-tools

A small React component library that aims to ease the process of creating accessible design systems, web apps or websites
<br />
<p>
  <img alt="Latest Release" src="https://badgen.net/npm/v/@feedzai/react-a11y-tools"/>
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@feedzai/react-a11y-tools"/>
  <img alt="Tree Shaking Support" src="https://badgen.net/bundlephobia/tree-shaking/@feedzai/react-a11y-tools"/>
  <img alt="Dependency Count" src="https://badgen.net/bundlephobia/dependency-count/@feedzai/react-a11y-tools"/>
  <img alt="MIT License" src="https://badgen.net/npm/license/@feedzai/react-a11y-tools"/>
</p>
<br />
<br/>

## Why
We think we can say that we are now in the omnipresence of design systems. Every company - from the smallest to the largest - has one or has thought about making one. These are great, and they provide the tools for building quick, fast and consistent user interfaces.

However, accessibility is still far from an easy task, especially when using libraries like React. Whether we developers use others' design systems or build our owns from scratch, accessibility is still considered a "last-minute-addition". And, sometimes, companies don't even have the resources or time to make it a priority.

Our goal is to make some parts of the accessibility process easier. Topics like focus management, navigation and announcements are all subjects that we think we can provide a helping hand.
<br/>

## Features
This library provides accessibility and behaviour following the WAI-ARIA Authoring Practices, including screen-reader and keyboard navigation support.

We do not force any styling methodology (such as CSS-in-JS libraries) or design-specific details. It provides the behaviour and interactions so that you can focus on your design.

We also provide a simple testing tool so that you can emulate a no-mouse environment.
<br/>

## Documentation
All documentation and examples are available at [react-a11y-tools.wiki](https://react-a11y-tools.wiki).

## Installation
Inside your React project directory, install React A11y Tools by running either of the following:

```sh
$ npm install @feedzai/react-a11y-tools

# or if you use Yarn

$ yarn add @feedzai/react-a11y-tools
```
<br/>

## Roadmap

Here is a table of the components, custom hooks and their status.

✅ - Released<br/>
🛠 - Building<br/>

| Status | Name           |
| ------ | -------------- |
| ✅     | Route Announcer      |
| ✅     | Messages Announcer          |
| ✅     | Focus Manager   |
| ✅     | Roving Tabindex       |
| ✅     | Keyboard Only      |
| ✅     | Skip Links |
<br/>

## Tests
First do the steps in "Installation", then:

```sh
npm run test
```

This runs both the Jest and the Cypress tests.

If you want to run only the Jest tests:

```sh
npm run test:jest
```

Just the Cypress tests:
```sh
npm run test:cypress

# or if you want to run them headlessly

npm run test:cypress-headless
```
<br/>

## Contributing
One of the project's goals is to make building design systems and component libraries as easy as possible while maintaining accessibility support.

So, feel like making some additions or changes to the project? That's awesome! We have a
[contributing guide](./CONTRIBUTING.md) to help guide you.
