// Compare 2 properties
// input: two obj, obj
// output: boolian

// algo
// 1. get keys1, keys2
// 2. if keys1.legth !== keys2.length
// 3. iterate keys1
// 4. compare keys1/keys2 & values1/values2
// 5. if (step 4 === false) ==> false

const getCustomersList = obj => {
  // put your code here
};

// my solution
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const values1 = Object.values(obj1);
  const values2 = Object.values(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
  }
  for (let value of values1) {
    if (!values2.includes(value)) {
      return false;
    }
  }
  return true;
}

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
