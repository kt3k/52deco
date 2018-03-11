# 52deco v1.0.0

[![CircleCI](https://circleci.com/gh/kt3k/52deco.svg?style=svg)](https://circleci.com/gh/kt3k/52deco)
[![codecov](https://codecov.io/gh/kt3k/52deco/branch/master/graph/badge.svg)](https://codecov.io/gh/kt3k/52deco)

> Use decorator without transpilation

52deco is a small utility for performing the same operation what ESNext decorators do. Decorators Proposal has been changing a lot and the only [babel transpilation][babel-plugin-transform-decorators-legacy] available today is outdated and not reliable. This tool supports using decorator with simple helper function.

# :cd: Install

Via npm:

    npm install --save 52deco

# :book: Usage

In case of method decorator:

```js
const deco = requrie('52deco')

class Foo {
  method () { ... }
}

deco.method(decorator, Foo, 'method')
```

The above is equivalent of:

```js
class Foo {
  @decorator
  method () { ... }
}
```

In case of class decorator:

```js
const deco = require('52deco')

class Foo {
  ...
}

deco.class(decorator, Foo)
```

The above is equivalent of:

```
@decorator
class Foo {
  ...
}
```

# Note

There is the babel transform [babel-plugin-transform-decorators-legacy][]. However that doesn't follow the current spec and not reliable.

# Origin

See: https://splatoonwiki.org/wiki/.52_Gal_Deco

# License

MIT

[babel-plugin-transform-decorators-legacy]: https://npm.im/babel-plugin-transform-decorators-legacy
