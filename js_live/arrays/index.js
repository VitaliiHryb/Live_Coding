// Live Coding Arrays

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

// input: -
// output: number
// pop

const numbersList1 = [1, 2, 3, 4, 5];
// before pop()
console.log(numbersList1);
const lastElement = numbersList1.pop();
// after pop()
console.log(numbersList1);
console.log(lastElement);

// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

// input: element (number)
// output: new length of the array

const numbersList2 = [1, 2, 3, 4, 5];
const pushRes = numbersList2.push(777);
console.log(pushRes);
console.log(numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// shift
// input: -
// output: (removed) first element from an array /number/

const numbersList3 = [1, 2, 3, 4, 5];
const firstNumber = numbersList3.shift();
console.log(numbersList3);
console.log(firstNumber);

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

// unshift
// input: number/numbers
// output: arrays length

const numbersList4 = [1, 2, 3, 4, 5];
const unsshiftNumbers = numbersList4.unshift(6, 7);
console.log(numbersList4);
console.log(unsshiftNumbers);

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// filter
// input: function
// output: new array

// callback
// input: number
// outout: boolian
const numFilter = [5, 10, 88, 3, 11, 5, 6];
const bigNumbers = numFilter.filter(numFilter => numFilter > 5);
console.log(bigNumbers);
console.log(numFilter);

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

const numFilter1 = [5, 10, 88, 3, 11, 5, 6];
const evenPositions = numFilter1.filter(numFilter1 => numFilter1 % 2 === 0 && numFilter1 > 5);
console.log(numFilter1);
console.log(evenPositions);

// (option1))
// callback function callbackFilter (numFilter) {
//   if (numFilter > 5) {
//      return true;
//    }
//   else {
//    return false;
//    }
// }

// in short
// (option 2)
// const callbackFilter = numFilter => numFilter > 5;
// (option3)
// numFilter1.filter(el => el > 5);

// resolver function
function sum(from, to, resolver) {
  let sumResult = 0;
  for (let i = from; i < to; i += 1) {
    sumResult += i;
  }
  resolver(sumResult);
}

function resolver(number) {
  console.log(number);
}

// test data
sum(10, 140, resolver);
