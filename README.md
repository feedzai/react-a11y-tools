<div align="center">
<h1>@feedzai/react-a11y-tools</h1>

<p>A small React component library that aims to ease the process of creating accessible design systems, web apps or websites</p>

<br />

[**Read The Docs**](https://feedzai.github.io/react-a11y-tools/)

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
  - [Run all tests](#run-all-tests)
  - [Unit tests](#unit-tests)
  - [Cypress component tests:](#cypress-component-tests)
  - [End-to-end tests:](#end-to-end-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## The Problem

We find ourselves amidst the age of design systems, where virtually every company, regardless of size, has either established one or contemplated its creation. These systems serve as invaluable resources, equipping us with the means to swiftly construct seamless and uniform user interfaces.

Yet, accessibility remains a challenging endeavor, particularly when integrating frameworks like React. Whether we rely on existing design systems or embark on crafting our own from the ground up, ensuring accessibility often emerges as an afterthought. Regrettably, some companies face constraints in resources and time, making it difficult to prioritize accessibility efforts.
<br />
<br/>

## The Solution

Our objective is to streamline certain aspects of the accessibility journey, focusing on key areas such as focus management, navigation, and announcements.

This library offers comprehensive accessibility features and behaviors in line with the WAI-ARIA Authoring Practices, encompassing support for screen-reader and keyboard navigation.

We refrain from imposing any specific styling methodology or design requirements. Instead, our compact package delivers essential behaviors and interactions, allowing you to concentrate on your design without constraints.

Additionally, we include a straightforward testing tool to simulate a mouse-free environment, facilitating thorough accessibility testing during development.
<br />
<br/>

## Installation

To integrate React A11y Tools into your React project directory, execute one of the following commands:

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
| ✅     | Messages Announcer |
| ✅     | Route Announcer    |
| ✅     | Focus Manager      |
| ✅     | Roving Tabindex    |
| ✅     | Keyboard Only      |
| ✅     | Skip Links         |
| ✅     | Semantic Headings  |
| ✅     | Visually Hidden    |
| ✅     | useTabbable        |
| ✅     | useAutoId          |

<br/>

## Issues

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behaviour.

[**See Bugs**][bugs]
<br />

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]
<br />
<br/>

## Tests

There are three layers of tests written for this library:

- Unit tests: we use vitest
- Component tests: we use cypress
- End-to-end tests: we also use cypress

To run the whole suite of tests, make sure you've done the steps in [installation](#installation), then:

### Run all tests

```sh
npm run test
```

### Unit tests

```sh
npm run test:unit
```

### Cypress component tests:

```sh
npm run test:component-open
```

### End-to-end tests:

```sh
npm run test:e2e
```
