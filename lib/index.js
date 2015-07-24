/**
 * IterateObject
 * Iterates an object. Note the object field order may differ.
 *
 * @name IterateObject
 * @function
 * @param {Object} obj The input object.
 * @param {Function} fn A function that will be called with the current name and value.
 * @return {Function} The `IterateObject` function.
 */
function IterateObject(obj, fn) {
    Object.keys(obj).forEach(function (k) {
        fn(k, obj[k]);
    });
}

module.exports = IterateObject;
