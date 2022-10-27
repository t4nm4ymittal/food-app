# Lotide

A mini clone of the [Lodash](https://lodash.com) library 📚.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @shubham22/lotide`

**Require it:**

`const _ = require('@shubham22/lotide');`

**Call it:**

`const results = _.countLetters('shubham') // => {a:1, b:1, h:2, m:1, s:1}`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1, array2)`: deep compares two arrays and prints a message according to the equality of given arrays.
- `assertEqual(a, b)`: takes in two primitive data type and prints a message according to the equality of inputs.
- `assertObjectsEqual(obj1, obj2)`: compares two objects and prints a message according to the equality of given objects.
- `countLetters(string)`: counts the occurrences of each character in given string and returns object with characters as properties and the number of times they appeared in the string as value.
- `countOnly(array, {a:true, b:false, c:false})`:}): it takes collection of items as input array and object with property’s value marked as true or false. Then it counts their occurrences of the item if they are present as object property and its value is true, at the end it returns object with each item’s occurrences in items array.
- `eqArray(array1, array2)`: compares two arrays and returns true or false based on their equality.
- `eqObjects(obj1, obj2)`: compares two objects and returns true or false based on their equality.
- `findKey(object, function())`: returns the first occurrences of a key in object according to the criteria provided in input function().
- `findKeyByValue(object, searchValue)`: returns key from object based on the search value, and return undefined if no such key with given searchValue is found.
- `flatten(nestedArray)`: takes in nested array as input and returns flatten array as output.
- `letterPosition(string)`: returns object with each of string as key and an array of their position in given string as value. It ignores all the whitespaces in the sentence and the indexes are zero based.
- `map(array, function())`: returns a new array with all the value from original array altered according to the operation specified in function()
- `middle(array)`: counts the occurrences of each character in given string and returns object with characters.
- `tail(array)`: returns a new array which contains the tail (whole array except the first element) of the given array. For empty array it returns empty array.
- `takeUntil(array, function())`: returns a new array which contains elements from original array until the condition from function() becomes true.
- `without(sourceArray, arrayofItemsToRemove)`:): returns new filtered array which removes the items specified in second input array.
