// Как устроен метод массива .filter

// input: array, callback
// output: copy array (just the elements from the given array that pass the test)

// callback
// input: element, index(optional), array(optional)
// output: boolian

// algorithm
// 1. creat new array
// 2. itterate input array
// 3. apply callback for every element
// 3.1. if callback return true -- push element in array

const filterArray = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resArr.push(arr[index]);
    }
  }

  return resArr;
};

// test data
const testArr = [4, 5, 6, 6, 2, 8, 2];
const testCallbackFunc = element => element % 2 === 0;

const resFilter = filterArray(testArr, testCallbackFunc);
console.log(resFilter);

// explanation (test data1)
// const testArr1 = [1, 2, 11, 0, -5, 5, 4, 8, NaN, 50, 20];
// const testCallback = (el, index, arr) => {
//   if (el > 10) {
//     return true;
//   }
//   return false;
// };
const testArr1 = [1, 2, 11, 0, -5, 5, 4, 8, NaN, 50, 20];
const testCallback = (el, index, arr) => {
  if (index > 5 && el > 10 && arr.length > 0) {
    return true;
  }
  return false;
};

const resFilter1 = filterArray(testArr1, testCallback);
console.log(resFilter1);

// --- multiply
// input: number1, number2, ... numberN
// output: prevdo array
function multiplyOld() {
  console.log(arguments);
  // ..
}

// -- testing (using spred operator)
multiplyOld(10, 7, 6);

// function multiply(age, ...args) {
function multiply(...args) {
  // console.log(age);
  // console.log(args);
  // ..
  return args.reduce((acc, el) => acc * el);
}

// -- testing
// multiply(18, 10, 7, 6);
console.log(multiply(18, 10, 7, 6));
