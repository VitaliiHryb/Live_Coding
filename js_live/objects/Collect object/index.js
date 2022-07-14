'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
// input: two arrays
// output: object
// algo
// 1. creat new obj
// 2. iterate keyList
// 3. put key/value to the obj

// option 1 (ok)
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => {
//     obj[key] = valuesList[index];
//     return obj;
//   }, {});
// }

// option 2 (good)
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

// // option 3 (good)
// function buildObject1(keysList, valuesList) {
//   const obj1 = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj1[keysList[index]] = valuesList[index];
//   }
//   return obj1;
// }

// option 4 (bad)
// function buildObject1(keysList, valuesList) {
//   let obj1 = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj1 = { ...obj1, [keysList[index]]: valuesList[index] };
//   }
//   return obj1;
// }

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
// const result1 = buildObject1(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result1);

// .reduce(acc, element, index, array)
// executes a user-supplied "reducer" callback function on each element of the array
// input: array
// output: acc (obj in this exercise)
