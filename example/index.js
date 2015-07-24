// Dependencies
var IterateObject = require("../lib");

// Iterate this object
IterateObject({
    name: "Bob"
  , age: 42
}, function (name, value) {
    console.log(name, value);
});
// => "name", "Bob"
// => "age", 42
