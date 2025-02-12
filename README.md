
<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/array"
    style="float:left; margin-right: 10px;"
  />
</a>

## typedly/array

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **TypeScript** type definitions package to handle array-related operations.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - `AppendDuplicates`
  - `AppendIfExists`
  - `AppendUnique`
  - `Append`
  - `Fill`
  - `First`
  - `Includes`
  - `Last`
  - `Length`
  - `Prepend`
  - `Remove`
  - `Reverse`
  - Slice
  - `Unique`
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

```bash
npm install @typedly/array --save-peer
```

## Api

```typescript
import {
  AppendDuplicates,
  AppendIfExists,
  AppendUnique,
  Append,
  Fill,
  First,
  Includes,
  Last,
  Length,
  Prepend,
  Remove,
  Reverse,
  // Slice,
  Unique
} from '@typedly/array';
```

### `AppendDuplicates`

```typescript
import { AppendDuplicates } from '@typedly/array';

// Append 3 duplicates of "x" to the array [1, 2, 3]
type Example1 = AppendDuplicates<[1, 2, 3], "x", 3>;  // [1, 2, 3, "x", "x", "x"]
const example1: Example1 = [1, 2, 3, "x", "x", "x"];

// Append 2 duplicates of 4 to the array [5, 6, 7]
type Example2 = AppendDuplicates<[5, 6, 7], 4, 2>;  // [5, 6, 7, 4, 4]
const example2: Example2 = [5, 6, 7, 4, 4];

// Append 5 duplicates of true to the array [false, true]
type Example3 = AppendDuplicates<[false, true], true, 5>;  // [false, true, true, true, true, true, true]
const example3: Example3 = [false, true, true, true, true, true, true];
```

### `AppendIfExists`

```typescript
import { AppendIfExists } from '@typedly/array';

// Append 3 duplicates of "x" to the array [1, 2, 3]
type Example1 = AppendDuplicates<[1, 2, 3], "x", 3>;  // [1, 2, 3, "x", "x", "x"]
const example1: Example1 = [1, 2, 3, "x", "x", "x"];

// Append 2 duplicates of 4 to the array [5, 6, 7]
type Example2 = AppendDuplicates<[5, 6, 7], 4, 2>;  // [5, 6, 7, 4, 4]
const example2: Example2 = [5, 6, 7, 4, 4];

// Append 5 duplicates of true to the array [false, true]
type Example3 = AppendDuplicates<[false, true], true, 5>;  // [false, true, true, true, true, true, true]
const example3: Example3 = [false, true, true, true, true, true, true];
```

### `AppendUnique`

```typescript
import { AppendUnique } from '@typedly/array';

type Example1 = AppendUnique<[1, 2, 3], 4>;  // [1, 2, 3, 4]
type Example2 = AppendUnique<[1, 2, 3], 2>;  // [1, 2, 3] (unchanged)

const example1: Example1 = [1, 2, 3, 4];
const example2: Example2 = [1, 2, 3];
```

### `Append`

```typescript
import { Append } from '@typedly/array';

type Example1 = Append<[1, 2, 3], 4>; // [1, 2, 3, 4]
type Example2 = Append<[1, 2, 3], 2>; // [1, 2, 3, 2] (duplicates)
type Example3 = Append< [], 'x'>;      // ['x']
type Example4 = Append<[1, 2], 2>;     // [1, 2, 2]
type Example5 = Append<number[], string>; // [...number[], string]

const example1: Example1 = [1, 2, 3, 4];
const example2: Example2 = [1, 2, 3, 2];
const example3: Example3 = ['x'];
const example5: Example4 = [1, 2, 2];
const example6: Example5 = [1, 2, 3, 'a'];
```

### `Fill`

```typescript
import { Fill } from '@typedly/array';

type Example1 = Fill<[1, 2, 3], 0>; // [0, 0, 0]
const example1: Example1 = [0,0,0];
```

### `First`

```typescript
import { First } from '@typedly/array';

type Example1 = First<[1, 2, 3]>;  // 1
type Example2 = First<[]>;         // never

const example1: Example1 = 1;
// const example2: Example2;
```

### `Includes`

```typescript
import { Includes } from '@typedly/array';

type Example1 = Includes<[1, 2, 3], 2>;  // true
type Example2 = Includes<[1, 2, 3], 4>;  // false

const example1: Example1 = true;
const example2: Example2 = false;
```

### `Last`

```typescript
import { Last } from '@typedly/array';

type Example1 = Last<[1, 2, 3]>;  // 3
type Example2 = Last<[]>;         // never

const example1: Example1 = 3;
// const example2: Example2;
```

### `Length`

```typescript
import { Length } from '@typedly/array';

type Example1 = Length<[1, 2, 3]>; // 3
type Example2 = Length<[]>;        // 0

const example1: Example1 = 3;
const example2: Example2 = 0;
```

### `Prepend`

```typescript
import { Prepend } from '@typedly/array';

type Example1 = Append<[1, 2, 3], 4>; // [1, 2, 3, 4]
type Example2 = Append<[1, 2, 3], 2>; // [1, 2, 3, 2] (duplicates)
type Example3 = Append< [], 'x'>;      // ['x']
type Example4 = Append<[1, 2], 2>;     // [1, 2, 2]
type Example5 = Append<number[], string>; // [...number[], string]

const example1: Example1 = [1, 2, 3, 4];
const example2: Example2 = [1, 2, 3, 2];
const example3: Example3 = ['x'];
const example5: Example4 = [1, 2, 2];
const example6: Example5 = [1, 2, 3, 'a'];
```

### `Remove`

```typescript
import { Remove } from '@typedly/array';

type Example1 = Remove<[1, 2, 3], 2>;   // [1, 3]
type Example2 = Remove<[1, 2, 3], 4>;   // [1, 2, 3] (unchanged)
type Example3 = Remove<['a', 'b', 'a'], 'a'>; // ['b'] (removes all occurrences)
type Example4 = Remove<[], 'x'>;        // [] (empty stays empty)

const example1: Example1 = [1, 3];
const example2: Example2 = [1, 2, 3];
const example3: Example3 = ['b'];
const example4: Example4 = [];
```

### `Reverse`

```typescript
import { Reverse } from '@typedly/array';

type Example1 = Reverse<[1, 2, 3]>;  // [3, 2, 1]
type Example2 = Reverse<['c', 'b', 'a']>;  // ['a', 'b', 'c']

const example1: Example1 = [3, 2, 1];
const example2: Example2 = ['a', 'b', 'c'];
```

### `Slice`

```typescript
import { Slice } from '@typedly/array';

// 
```

### `Unique`

```typescript
import { Unique } from '@typedly/array';

type Example1 = Unique<[1, 2, 2, 3, 3, 3]>; // [1, 2, 3]
const example1: Example1 = [1, 2, 3];
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

## Packages

- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/array
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/array
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/array
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/array
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/array/issues
  [typedly-forks]: https://github.com/typedly/array/network
  [typedly-license]: https://github.com/typedly/array/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/array/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Farray.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Farray

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
