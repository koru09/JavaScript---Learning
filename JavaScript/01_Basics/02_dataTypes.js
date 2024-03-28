"use strict" // treat all JS code as newer version

// number => 2 to power 53
// bigint
// boolean => true / false
// string => ""

//symbol => unique
// null => standalone value
// undefined =>

console.table([typeof Number, typeof BigInt, typeof Boolean, typeof String, typeof Symbol, typeof null, typeof undefined]);
console.log(typeof 23);

/*

In JavaScript, the fact that typeof null returns 'object' is actually a historical quirk and considered by many to be a mistake or an oversight in the language.

null is not actually an object. It is a primitive value that represents the intentional absence of any object value. However, due to a bug in the original JavaScript implementation, typeof null returns 'object'.

This behavior has been preserved for backward compatibility reasons, as changing it could potentially break existing code that relies on this behavior.

So, while typeof null returns 'object', it's important to understand that null is not actually an object in JavaScript. It's a primitive value, along with types like numbers, strings, booleans, etc.

*/ 