# tmpl-type
> Get tmpl type.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/tmpl-type
```

## usage
```js
import tmplType from '@jswork/tmpl-type';

tmplType('abc is {0}, name is {1}');              // SIMPLE
tmplType('abc is {age}, name is {person.name}');  // SIMPLE
tmplType('abc is ${name}');                       // LITERAL
tmplType('abc is ${{env.home}}');                 // DOUBLE
tmplType('abc is aric.');                         // undefined
```

## license
Code released under [the MIT license](https://github.com/afeiship/tmpl-type/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/tmpl-type
[version-url]: https://npmjs.org/package/@jswork/tmpl-type

[license-image]: https://img.shields.io/npm/l/@jswork/tmpl-type
[license-url]: https://github.com/afeiship/tmpl-type/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/tmpl-type
[size-url]: https://github.com/afeiship/tmpl-type/blob/master/dist/tmpl-type.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/tmpl-type
[download-url]: https://www.npmjs.com/package/@jswork/tmpl-type
