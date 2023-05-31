<div align="center">
<h1>react-a11y-tools</h1>

<p>A small React component library that aims to ease the process of creating accessible design systems, web apps or websites</p>

<br />

[**Read The Docs**](https://react-a11y-tools.wiki)

</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]
<!-- prettier-ignore-end -->

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
	- [Run all component tests](#run-all-component-tests)s
	- [Cypress component tests:](#cypress-component-tests)
	- [End-to-end tests:](#end-to-end-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## The Problem

We are in the era of design systems. Every company - from the smallest to the largest - has one or has thought about making one. These are great, and they provide the tools for building quick, fast and consistent user interfaces.

However, accessibility is still far from an easy task, especially when using libraries like React.

Whether we developers use others' design systems or build our own from scratch, accessibility is still considered a "last-minute-addition". And, sometimes, companies don't even have the resources or time to make it a priority.
<br />
<br/>

## The Solution

My goal is to make some parts of the accessibility process easier. Topics like focus management, navigation and announcements are all subjects we think can provide a helping hand.

This library provides accessibility and behaviour following the WAI-ARIA Authoring Practices, including screen-reader and keyboard navigation support.

We do not force any styling methodology or design-specific details. Instead, the little package provides the behaviour and interactions so that you can focus on your design.

There's also a simple testing tool so that you can emulate a no-mouse environment.
<br />
<br/>

## Installation

Inside your React project directory, install the package by running either of the following:

```sh
$ npm install react-a11y-tools

# or if you use Yarn

$ yarn add react-a11y-tools
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

- We use  Cypress to do component and integration testing.

To run the whole suite of tests, make sure you've done the steps in [installation](#installation), then:

### Run all tests

```sh
npm run test
```

### Cypress component tests:

```sh
# In UI mode
npm run test:component-open

# in headless mode
npm run test:component-run
```

### Integration tests:

```sh
# 1.1 Open Documentation website
npm run documentation:start

# 1.2 Open Cypress in UI mode
npm run test:integration-open
```

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://github.com/JoaoTMDias/react-a11y-tools/actions/workflows/publish.yml/badge.svg?branch=main
[build]: https://github.com/JoaoTMDias/react-a11y-tools/actions/workflows/publish.yml
[coverage-badge]: https://img.shields.io/codecov/c/github/JoaoTMDias/react-a11y-tools.svg?style=flat-square
[coverage]: https://codecov.io/github/JoaoTMDias/react-a11y-tools
[version-badge]: https://img.shields.io/npm/v/@jtmdias/react-a11y-tools.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-a11y-tools
[downloads-badge]: https://img.shields.io/npm/dm/@jtmdias/react-a11y-tools.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-a11y-tools
[license-badge]: https://img.shields.io/npm/l/@jtmdias/react-a11y-tools.svg?style=flat-square
[license]: https://github.com/JoaoTMDias/react-a11y-tools/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/JoaoTMDias/react-a11y-tools/blob/main/other/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/JoaoTMDias/react-a11y-tools?color=orange&style=flat-square
[bugs]: https://github.com/JoaoTMDias/react-a11y-tools/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/JoaoTMDias/react-a11y-tools/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/JoaoTMDias/react-a11y-tools/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
<!-- prettier-ignore-end -->
