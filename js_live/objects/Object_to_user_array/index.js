// Объект в масив пользователей

// Object.entries(obj)
// input: obj
// output: [{key1: value1} ... {keyN: valueN}]

// Drafet algo
// Obj of objects ==> Array of arrays
// ==> ['customers-id-1',{...}], ['customers-id-2',{...}], ['customers-id-3',{...}]
// loop threw this to destructuring assignment
// ==> [{id: 'customers-id-1', name: 'William', age: 54}, ... {...}]
// sort array from old to young

// Algo 1
// 1. get array of key-value - entries - [[key1, value1], [key2, value2], [key3, value3]]
// 2. iterate array of entries -on every step create new obj - [obj1, obj2, obj3]
// 3. sort array & return

// Algo 2
// 1. get arrays keys - ['key1', 'key2', ..]
// 2. itterate keys - on every step create new obj
// 3. sort array & return

// class solution
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// // draft solution
// const getCustomersList = obj =>
//   // input: obj
//   // output: [[key1, value1], ...]
//   Object.entries(obj)
//     .map(entri => {
//       console.log('entri is ', entri);
//       const obj = {};

//       Object.assign(obj, { id: entri[0] });
//       console.log('some result is ', obj);

//       Object.assign(obj, entri[1]);
//       console.log('result is ', obj);
//     })
//     .sort((a, b) => a.age - b.age);

// // draft solution 2
// const getCustomersList = obj =>
//   // input: obj
//   // output: [[key1, value1], ...]
//   Object.entries(obj)
//     .map(entri => {
//       return { id: entri[0], ...entri[1] };
//     })
//     .sort((a, b) => a.age - b.age);

// // draft solution 3
// const getCustomersList = obj =>
//   // input: obj
//   // output: [[key1, value1], ...]
//   Object.entries(obj)
//     .map(([id, customer]) => {
//       // return { id: id, ...customer };
//       return { id, ...customer };
//     })
//     .sort((a, b) => a.age - b.age);

// // draft solution ==> last solution
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// // Anna solution (ok)
// // use array destruction
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// // Roman solution (norm)
// // 1. use push insted of concat
// // 2. naming (data ==> customerObj)
// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// // Alexandr (good)
// // use short naming in sort
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

// BAD solution
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);

//   return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age);
// };
// 1. don't use values / need only keys
// 2. don't use index
// 3. bad naming
// 4. dont need keys

// // refactoring bad solution ==> GOOD
// const getCustomersList = obj => {
//   return Object.keys(obj)
//     .map(key => ({ ...obj[key], id: key }))
//     .sort((a, b) => a.age - b.age);
// };

// // OLEXIY
// // 1. don't use values
// // 2. don't use index
// // 3. bad naming
// // 4. remove redunt variables
// const getCustomersList = obj => {
//   const customersIds = Object.keys(obj);
//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIds[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// // ALEXANDR (need full refactoring)
// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   // console.log(arr);
//   // console.log(obj);

//   return arr;
// };

// VITALII (BAD)
// 1. don't use shift
// 2. fix eslint errors
// 3. bad naming
// 4. redundantt variables
// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     let id = { id: arr.shift() };
//     return (arr[0] = { ...arr[0], ...id });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

// // VITALII (BAD) --- trying refactoring
// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     const idObj = { id: arr[0] };
//     return { ...arr[1], idObj };
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

// // JENYA (BAD)
// // 1. don't use index
// // 2. bad naming
// const getCustomersList = customers =>
//   Object.keys(customers)
//     // .reduce((acc, elem, index) => {
//     .reduce((resArr, key) => {
//       // acc[index] = { id: elem, ...customers[elem] };
//       resArr.push({ id: key, ...customers[key] });
//       return resArr;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// // DIMA
// // BAD / needed new solution
// const getCustomersList = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };

// // my OLD solution
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => (a.age > b.age ? 1 : -1));
// };

// my NEW solution
const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => a.age - b.age);
};

const customers = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customers-id-3': {
    name: 'Ann',
    age: 16,
  },
};

console.log(getCustomersList(customers));
// console.log(customers);

// result
/* =>
[
  {
    name: 'Ann',
    age: 16,
    id: 'customers-id-3'
  },
  {
    name: 'Tom',
    age: 17,
    id: 'customers-id-2'
  },
  {
    name: 'William',
    age: 54,
    id: 'customers-id-1'
  },
]
*/
