// Объект в масив пользователей
// input: object
// output: array

// Object.entries(obj)
// input: obj
// output: [{key1: value1} ... {keyN: valueN}]

// Algo
// Obj of objects ==> Array of arrays
// ==> ['customers-id-1',{...}], ['customers-id-2',{...}], ['customers-id-3',{...}]
// loop threw this to destructuring assignment
// ==> [{id: 'customers-id-1', name: 'William', age: 54}, ... {...}]
// sort array from old to young

const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => (a.age > b.age ? 1 : -1));
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
console.log(customers);

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
