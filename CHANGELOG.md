# [3.0.0](https://github.com/feedzai/react-a11y-tools/compare/v2.0.1...v3.0.0) (2024-07-15)


### Bug Fixes

* **FocusManager:** Replaces implementation with focus-trap-react ([#28](https://github.com/feedzai/react-a11y-tools/issues/28)) ([19bc86c](https://github.com/feedzai/react-a11y-tools/commit/19bc86c03b120aa2bfedb1af5ab653fbd71c1cfb)), closes [#27](https://github.com/feedzai/react-a11y-tools/issues/27)


### BREAKING CHANGES

* **FocusManager:** autoFocus, restoreFocus and contain are now set to true by default
* **FocusManager:** the `useFocusManager` was reimplemented. Since we no longer use a React context state management solution to travel between elements, the hook was re-implemented as an optional way to facilitate the creation of a `FocusTrap` instance, but without using the provided element by the package.

## [2.0.1](https://github.com/feedzai/react-a11y-tools/compare/v2.0.0...v2.0.1) (2024-07-12)


### Bug Fixes

* **deps:** added @feedzai/js-utilities as peer dependency ([dc58a51](https://github.com/feedzai/react-a11y-tools/commit/dc58a517411901c5748996d912cab4fe34900e4c))
* **deps:** upgraded @feedzai/js-utilities to 1.4.2 and replaced imports ([121a5e8](https://github.com/feedzai/react-a11y-tools/commit/121a5e8b32451b6d0b7c3a5e858120a159da3d39))
* **docs:** fixed Rover Provider link ([da59716](https://github.com/feedzai/react-a11y-tools/commit/da597161c8a60d42a29ad37c95b259bad100a619))

# [2.0.0](https://github.com/feedzai/react-a11y-tools/compare/v1.5.2...v2.0.0) (2024-04-21)


### Features

* **bundle:** added dep to replace internal helpers and hooks ([e0fec1d](https://github.com/feedzai/react-a11y-tools/commit/e0fec1ddd6094a187ac70e3f02f1992e0f20c0bd))
* **SkipLink:** added styles as scss modules ([720d8ed](https://github.com/feedzai/react-a11y-tools/commit/720d8ed56eca067662b096762accd11f39dcf535))


### BREAKING CHANGES

* **bundle:** Removed internal hooks (useAutoId, useMergedRefs, usePrevious and useSafeLayoutEffect) as exported modules
* **bundle:** Removed internal hooks (callIfExists, cloneValidElement, emptyFunction, inRange, isBoolean, isBrowser, isFunction, isNil, isNumber, isString, keycodes, classNames, makeId) as exported modules
* **bundle:** Removed "react/jsx-runtime" as a bundled dependency

## [1.5.2](https://github.com/feedzai/react-a11y-tools/compare/v1.5.1...v1.5.2) (2024-03-15)


### Bug Fixes

* **package.json:** fixed wrong exports file extensions ([a2838c7](https://github.com/feedzai/react-a11y-tools/commit/a2838c787798a59bd0741e47d503fd55476ed184))

## [1.5.1](https://github.com/feedzai/react-a11y-tools/compare/v1.5.0...v1.5.1) (2024-03-15)


### Bug Fixes

* **package.json:** removed postinstall script that ([4a98f56](https://github.com/feedzai/react-a11y-tools/commit/4a98f56d67bfa9edf0d062174e41eea86898bd8f))

# [1.5.0](https://github.com/feedzai/react-a11y-tools/compare/v1.4.1...v1.5.0) (2024-03-04)


### Bug Fixes

* **bundle:** changed bundle from exporting CommonJS to UMD ([e112162](https://github.com/feedzai/react-a11y-tools/commit/e11216274997e92cefc503fe4467d5bd0b989d22))
* **eslint:** upgraded [@typescript-eslint](https://github.com/typescript-eslint) to version 7 ([df35f88](https://github.com/feedzai/react-a11y-tools/commit/df35f882f14784424134746e3561b5a82ce88b5f))


### Features

* replaced merge-coverage script with @jtmdias/merge-coverage ([5fe7f92](https://github.com/feedzai/react-a11y-tools/commit/5fe7f92e1006b219b4fed4ed21a0c5e1ec221217))
* **unit-tests:** replaced jest with vitest ([250848b](https://github.com/feedzai/react-a11y-tools/commit/250848b0836c0d9c2d220d4ed66686affcac673a))
