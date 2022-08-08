// hosting Поднятие

// testing
// test(); // всплывает
// testArrowFunc(); // не всплывает

// console.log(price); // не всплывает => undefined
// console.log(newPrise); // не всплывает ==> Errror ('newPrise' before initialization)
// console.log(price1); // не всплывает => undefined
// console.log(price2); // не всплывает => Errror

// function test() {
//   console.log(`test`);

//   if (true) {
//     var price2 = 101;
//   }
// }
// if (true) {
//   var price1 = 101;
// }

// const testArrowFunc = () => {
//   console.log(`testArrowFunc`);
// };

// var price = 100;

// let newPrise = 100;

// testArrowFunc(); // Error (testArrowFunc is not a function)

// var testArrowFunc = () => {
//   console.log('testArrowFunc');
// };

// testArrowFunc(); // => testArrowFunc

// Example 1

console.log(message); // => undefined
var message = 'Hoisting is here';

var a = 55;
console.log(a); // => 55

if (a) {
  var a = 1;

  console.log(a); // => 1
}

console.log(a); // => 1

// // --- hoisting --- //
// var a;
// a = 55;
// console.log(a); // => 55

// if (a) {
//   a = 1;

//   console.log(a); // => 1
// }

// console.log(a); // => 1

// Example 2

var b = 77;
console.log(b);

function print() {
  var a = 2;
  console.log(a);
}

print();

console.log(b);

// // ---------- //
// var b;
// b = 77;
// console.log(b);

// function print() {
//   var a;
//   a = 2;
//   console.log(a);
// }

// print();

// console.log(b);
