<div align="center">
<h1>@feedzai/a11y-tools</h1>

<p>A small React component library that aims to ease the process of creating accessible design systems, web apps or websites</p>

<br />

[**Read The Docs**](https://react-a11y-tools.wiki)

</div>

<p align="center">
  <img height="20" loading="lazy" alt="Latest Release" src="https://badgen.net/npm/v/@feedzai/react-a11y-tools"/>
  <img height="20" loading="lazy" alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@feedzai/react-a11y-tools"/>
  <img height="20" loading="lazy" alt="Tree Shaking Support" src="https://badgen.net/bundlephobia/tree-shaking/@feedzai/react-a11y-tools"/>
  <img height="20" loading="lazy" alt="Dependency Count" src="https://badgen.net/bundlephobia/dependency-count/@feedzai/react-a11y-tools"/>
  <img height="20" loading="lazy" alt="MIT License" src="https://badgen.net/npm/license/@feedzai/react-a11y-tools"/>
</p>
<br />
<br/>

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Table of Contents](#table-of-contents)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Installation](#installation)
- [Roadmap](#roadmap)
- [Issues](#issues)
	- [🐛 Bugs](#-bugs)
	- [💡 Feature Requests](#-feature-requests)
- [Tests](#tests)
	- [Run all component tests](#run-all-component-tests)
	- [Jest tests](#jest-tests)
	- [Cypress component tests:](#cypress-component-tests)
	- [End-to-end tests:](#end-to-end-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## The Problem

We are in the era of design systems. Every company - from the smallest to the largest - has one or has thought about making one. These are great, and they provide the tools for building quick, fast and consistent user interfaces.

However, accessibility is still far from an easy task, especially when using libraries like React. Whether we developers use others' design systems or build our owns from scratch, accessibility is still considered a "last-minute-addition". And, sometimes, companies don't even have the resources or time to make it a priority.
<br />
<br/>

## The Solution

Our goal is to make some parts of the accessibility process easier. Topics like focus management, navigation and announcements are all subjects that we think we can provide a helping hand.

This library provides accessibility and behaviour following the WAI-ARIA Authoring Practices, including screen-reader and keyboard navigation support.

We do not force any styling methodology or design-specific details. The little package provides the behaviour and interactions so that you can focus on your design.

We also provide a simple testing tool so that you can emulate a no-mouse environment.
<br />
<br/>

## Installation

Inside your React project directory, install React A11y Tools by running either of the following:

```sh
$ npm install @feedzai/react-a11y-tools

# or if you use Yarn

$ yarn add @feedzai/react-a11y-tools
```

<br />
<br/>

## Roadmap

Here is a table of the components, custom hooks and their status.

✅ - Released<br/>
🛠 - Building<br/>

| Status | Name               |
| ------ | ------------------ |
| ✅     | Route Announcer    |
| ✅     | Messages Announcer |
| ✅     | Focus Manager      |
| ✅     | Roving Tabindex    |
| ✅     | Keyboard Only      |
| ✅     | Skip Links         |
| ✅     | Semantic Headings  |
| ✅     | useTabbable        |

<br/>

## Issues

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]
<br />

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]
<br />
<br/>

## Tests

There are two layers of tests written for this library:

- We use Jest and Cypress to do component testing.
- The end-to-end tests are also made using the Cypress runner.

To run the whole suite of tests, make sure you've done the steps in [installation](#installation), then:

### Run all component tests

```sh
npm run test
```

### Jest tests

```sh
npm run test:jest
```

### Cypress component tests:

```sh
npm run test:ct
```

### End-to-end tests:

```sh
# 1.1 Open Storybook
npm run storybook

# 1.2 Open Cypress
npm run test:cypress

# 2. Run them in Headless mode
npm run test:e2e
```
