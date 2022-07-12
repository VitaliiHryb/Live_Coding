'use strict';

// ----------------------------------- WITHDRAW -------------------------------------------------
// // (my)
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   const balancesIndex = balances[clientIndex];

//   if (balancesIndex > amount) {
//     return balancesIndex - amount;
//   }
//   return -1;
// };

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// reamoove mogic from if
// get rid of dublicated code
// don't use find

// // bad code example (Hlib)
// // bad option
// balances.find((item, index) => clients.indexOf(client) === index);
// // good option
// const clientIndex = clients.indexOf(client);

// const withdraw = (clients, balances, client, amount) => {
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// // bad code example (Igor)
// const withdraw = (clients, balances, client, amount) => {
//   const balances = balances[clients.indexOf(client)];
//   return balances >= amount ? (balances -= amount) : -1;
// };
// balances[clients.indexOf(client)] >= amount ? (balances[clients.indexOf(client)] -= amount) : -1;

// // add return
// // const res = bool ? value1 : value2;
// // add const clientIndex = clients.indexOf(client);

// bad code example (Olexii)
// // bad option
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

// good option
const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  // eslint-disable-next-line no-param-reassign
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// // SERGII
// // bad option - not works
// 'use strict';

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client); // curentClient ==> clientIndex
//   // const newBalance = balances[curentClient] - amount; // don't need
//   balances[clientIndex] -= amount;
//   return balances[clientIndex] > 0 ? balances[clientIndex] : -1; // use if
// };

// // need test data
// const balances = [1400, 87, -6];
// const res = withdraw(['Ann', 'John', 'User'], balances, 'John', 100);
// console.log(balances);
// console.log(res);

// // DENIS
// // NORM
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

// // refactoring
// // GOOD
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// // VOLODYMYR
// // NORM
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// // DIMA
// // code not works
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount;
// };

// // next user (Alexandr)
// const withdraw = (clients, balances, client, amount) => {
//   // const clientIndex = clients.indexOf(client);
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     // don't need else
//     return -1;
//   }
// };

// // // when use else:
// // if(a > 2) {
// //   console.log('Hello');
// // } else {
// //   console.log('Bye');
// // }
// // console.log('Greeting');

// // ANASTASIYA
// // code not works
// // better use if
// // need constants
// // bad to read
// // 'use strict';
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

// ----------------------------------- /WITHDRAW -------------------------------------------------

// ----------------------------------- МАССИВ СЛУЧАЙНЫХ ЧИСЕЛ ------------------------------------

// (my)
// const randomNum = (min, max) => Math.random() * (max - min) + min;

// const getRandomNumbers = (length, from, to) => {
//   if (Math.abs(from - to) < 1) return null;
//   let result = [];
//   for (let i = 0; i < length; i++) {
//     result.push(Math.floor(randomNum(from, to)));
//   }
//   return result;
//   //console.log(result);
// };

// // examples
// getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

// ANNA
// // bad option
// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   // bad validation
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// // good option
// const getRandomNumbers = (length, from, to) => {
//   const fromCeil = Math.ceil(from);
//   const toCeil = Math.ceil(to);
//   // good validation
//   if (toCeil - fromCeil < 1) {
//     return null;
//   }

//   return new Array(length).fill(Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
// };

// return new Array(length).map(() => Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil)); // not works

// console.log(getRandomNumbers(1, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
// console.log(getRandomNumbers(1, 0.5, 0.9)); // ==> [3, 3, 2, 3, 2]
// console.log(getRandomNumbers(1, 1.7, 2.5)); // ==> [3, 3, 2, 3, 2]
