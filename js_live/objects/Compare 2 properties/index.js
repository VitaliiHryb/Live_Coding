// Compare 2 properties
// input: two obj, obj
// output: boolian

// algo
// 1. get keys1, keys2
// 2. if keys1.legth !== keys2.length
// 3. iterate keys1
// 4. compare key1/value1 with value1/key2
// 5. if (step 4 === false) ==> false

// use methods some/every
// option 1 (good)
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(key => obj1[key] === obj2[key]);
}

// // option 2 (good too)
// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }

//   return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }

// // solution with some (not good)
// function compareObjects(obj1, obj2) {
//   return !Object.keys({ ...obj1, ...obj2 }).some(key => obj1[key] !== obj2[key]);
// }

// old solution
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// // my old solution option2
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (!keys2.includes(key)) {
//       return false;
//     }
//   }
//   for (let value of values1) {
//     if (!values2.includes(value)) {
//       return false;
//     }
//   }
//   return true;
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
