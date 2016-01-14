# iterate-object [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/iterate-object.svg)](https://www.npmjs.com/package/iterate-object) [![Downloads](https://img.shields.io/npm/dt/iterate-object.svg)](https://www.npmjs.com/package/iterate-object) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A convenient way to iterate objects.

## Installation

```sh
$ npm i --save iterate-object
```

## Example

```js
// Dependencies
var IterateObject = require("iterate-object");

// Iterate this object
IterateObject({
    name: "Bob"
  , age: 42
}, function (value, name) {
    console.log(name, value);
});
// => "name", "Bob"
//    "age", 42

// Iterate an array
IterateObject([
    1, 2, 3, 4, 5, 6, 7
], function (value, i) {
    console.log("v[" + i + "] = " + value);
});
// => v[0] = 1
//    v[1] = 2
//    v[2] = 3
//    v[3] = 4
//    v[4] = 5
//    v[5] = 6
//    v[6] = 7

// Iterate an array
IterateObject([
    "Alice", "Bob", "Carol", "Dave"
], function (value, i, arr) {
    console.log("Current: " + value + (arr[i + 1] ? " Next:" + arr[i + 1] : ""));
});
// => Current: Alice Next:Bob
//    Current: Bob Next:Carol
//    Current: Carol Next:Dave
//    Current: Dave
```

## Documentation

### `IterateObject(obj, fn)`
Iterates an object. Note the object field order may differ.

#### Params
- **Object** `obj`: The input object.
- **Function** `fn`: A function that will be called with the current value, field name and provided object.

#### Return
- **Function** The `IterateObject` function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bloggify-on-request`](https://github.com/Bloggify/on-request#readme)

 - [`bloggify-redirect`](https://github.com/Bloggify/redirect#readme)

 - [`color-it`](https://github.com/IonicaBizau/node-color-it#readme)

 - [`emoji-from-word`](https://github.com/IonicaBizau/emoji-from-word#readme)

 - [`emojic`](https://github.com/IonicaBizau/emojic#readme)

 - [`engine-flow-types`](https://github.com/jillix/engine-flow-types#readme) by jillix

 - [`engine-parser`](https://github.com/IonicaBizau/engine-parser) by jillix

 - [`enny`](https://github.com/IonicaBizau/enny) by jillix

 - [`gh-following`](https://github.com/IonicaBizau/gh-following#readme)

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`lien`](https://github.com/LienJS/Lien)

 - [`map-o`](https://github.com/IonicaBizau/node-map-o)

 - [`match`](https://github.com/IonicaBizau/match.js#readme)

 - [`nodeice`](https://github.com/IonicaBizau/nodeice)

 - [`oargv`](https://github.com/IonicaBizau/node-oargv)

 - [`svg.connectable.js`](https://github.com/jillix/svg.connectable.js) by jillix

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md