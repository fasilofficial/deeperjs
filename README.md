# deeperjs

[![npm version](https://badge.fury.io/js/deeperjs.svg)](https://www.npmjs.com/package/deeperjs)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

`deeperjs` is a versatile npm package providing a powerful deep cloning function for JavaScript objects. It supports the cloning of nested objects, arrays, and handles special cases like Date and RegExp objects. The function is designed to create deep copies of complex data structures, preventing unintended reference sharing. With support for circular references, it ensures a robust and reliable deep cloning solution for a wide range of use cases.

## Installation

To install `deeperjs` in your project, run the following command:

```bash
npm install deeperjs
```

## Usage
To use `deeperjs` in your project, add the following code:

```javascript
const deeper = require('deeperjs');

const originalObject = {}
const newObject = deeper.deepClone(originalObject)
```