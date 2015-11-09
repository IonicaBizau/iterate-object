# iterate-object [![Support this project][donate-now]][paypal-donations]

A convenient way to iterate objects.

## Installation

```sh
$ npm i iterate-object
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

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`lien`](https://github.com/LienJS/Lien)

 - [`match`](https://github.com/IonicaBizau/match.js#readme)

 - [`oargv`](https://github.com/IonicaBizau/node-oargv)

 - [`svg.connectable.js`](https://github.com/jillix/svg.connectable.js) by jillix

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md