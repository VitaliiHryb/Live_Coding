/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
function getSenseOfLife() {
 return 42;
}

// option 1
const res = getSenseOfLife();
console.log(res);

// option 2
console.log(getSenseOfLife());

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

const getSquared = (num) => num * num;

// option 2
console.log(getSquared(4));
console.log(getSquared(-10));
console.log(getSquared(0.31));

/* ф-ция sum должна принимать два числа и вернуть их сумму */

const getSum = (num1, num2) => num1 + num2;

// testing
console.log(getSum(4, 5));
console.log(getSum(4.5, 5.1));
console.log(getSum(-4.5, 5.1));

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

// const printMessage = (age) => 'I am ' + age + ' years old';
const printMessage = (age) => `I am ${age} years old`;

// testing
console.log(printMessage(4));
console.log(printMessage(4.5));
console.log(printMessage(-4.5));

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

const numProduct = (num1, num2) => num1 * num2;

// testing
console.log(numProduct(4, 5));
console.log(numProduct(4.5, 5.1));
console.log(numProduct(-4.5, 5.1));

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

const numSquare = (num) => num * num;

// testing
console.log(numSquare(4, 5));
console.log(numSquare(-4, 5));
console.log(numSquare(-4, -5));
console.log(numSquare(4.5, 5.1));
console.log(numSquare(-4.5, 5.1));

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

const getMagicNumber = () => 17;

// testing
console.log(getMagicNumber());

// функция в функции sum (from, to)

// function getSumFromTo(from, to) {
//  let sum = 0;

//  for (let i = from; i <= to; i++) {
//   sum += i;
//  }

//  return sum;
// }

// console.log(sum(4, 5));
// console.log(sum(4.5, 5.5));

//

function getSumFromTo(from, to) {
 let sum = 0;

 for (let i = from; i <= to; i++) {
  sum += i;
 }

 return sum;
}

const compareSums = (firstFrom, firstTo, secondFrom, secondTo) =>
 getSumFromTo(firstFrom, firstTo) > getSumFromTo(secondFrom, secondTo);

console.log(compareSums(4, 5, 3, 2));
