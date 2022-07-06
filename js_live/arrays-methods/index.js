const numberList = [5, 0, 7, -8, 9, 50, 220];

// input: callback
// output: array

// callback
// input: array (Function that is called for every element of arr)
// output: array (value is added to newArray)

// option 1
// const mapRes = numberList.map(el => {
//   const newEl = el * el;
//   return newEl;
// });

// option 2
// const mapRes = numberList.map(el => el * el);
// console.log(mapRes);

// const mapRes = numberList.map((el, index) => {
//   let newEl = null;

//   if (index > 2) {
//     newEl = el * el;
//   } else {
//     newEl = el;
//   }
//   return newEl;
// })
// console.log(mapRes);

// extratask-1
// const mapRes = numberList.map((el, index) => (index > 2 ? el * el : el));

// console.log(mapRes);

// extratask-2
// const mapRes = numberList.map((el, index, array) => {
//   if (array.includes(el)) {
//     // do some logic
//   }

//   let newEl = null;

//   if (index > 2) {
//     newEl = el * el;
//   } else {
//     newEl = el;
//   }
//   return newEl;
// });
// console.log(mapRes);

// task-2

// input: callback
// output: undefined

// callback
// input: element
// output: undefined

// numberList.forEach(el => {
//   if (el > 0) {
//     console.log(el);
//   }
// });

// in short
// numberList.forEach(el => (el > 0 ? console.log(el) : console.log()));

// explanation (when use return return with forEch it will ignore return)
// numberList.forEach(el => el * el);
// console.log(numberList);

// task-3

// input: callback function
// output: number (sum of all the elements in an array)

// callback, acc init value
// input: acc, element, index(optional), array(optional)
// output: new acc
const transactions = [5, 0, 7, -8, 9, 150, 200, 44, 66, -6];

// option 1
// transactions.reduce((sum, el) => {
//   console.log('sum', sum);
//   console.log('el', el);

//   if (el > 100) {
//     return sum + el;
//   }
//   return sum;
// }, 0);

// explanation
// transactions.reduce((acc, el) => {
//   console.log('acc', acc);
//   console.log('el', el);

//   return 7;
// }, 100);

// option 2
const reduceSum = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
console.log(reduceSum);
