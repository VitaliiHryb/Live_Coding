// Как устроен метод массива .filter

// input: array, callback
// output: new array (populated with the results of calling a provided function on every element in the calling array)

// callback
// input: element, index(optional), array(optional)
// output: new element

// algorithm
// 1. creat new array
// 2. itterate input array
// 3. apply callback for every element
// 3.1. callback return element -- push element in new array

const mapArrayElements = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const result = callback(el, index, arr);
    resArr.push(result);
  }

  return resArr;
};

// test data
const testArr = [4, 5, 6, 6, 2, 8, 2];
const testCallbackFunc = (el, index, arr) => {
  return el / 2;
};

const resMap = mapArrayElements(testArr, testCallbackFunc);
console.log(resMap);
