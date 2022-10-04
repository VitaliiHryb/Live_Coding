class User {
  constructor(firstName, group, grade) {
    this.firstName = firstName;
    this.group = group;
    this.grade = grade;
  }
}
//
const instance = new User('this', 'is', 'test');
console.log(instance);
// // context
// function someFunc(points) {
//   console.log(`Hello, ${this.name}, you have ${points} points`);
// }

// someFunc(10);

// //
// const newFunction = someFunc.bind({ name: 'vitalii' }, 10);
// console.log(newFunction());
// newFunction(25);

// console.log(arr);

// const user = { id: 205, adress: { ip: '121.0.0.1' } };
// const { id, adress } = user;
// const { ip } = adress;

// // чи існує нєкій ключ в обєкті
// console.log('id' in user);
// console.log(user.hasOwnProperty('adress'));
// console.log(Object.keys(user).includes('id'));

// // Andrii Mudrevskyi dont like this but I like
// console.log(user.id !== undefined);

// // cool
// console.log(user?.id);

// console.log((() => {}) === (() => {}));

// console.log((() => {})());

// function markAdmins(usersList, adminIds) {
//   return usersList.map(userData => {
//     return { ...userData, isAdmin: adminIds.includes(userData.id) };
//   });
// }

// // examples
// const adminIds = ['1', '3'];
// const users = [
//   { id: '1', name: 'Bob' },
//   { id: '2', name: 'Tom' },
//   { id: '3', name: 'Sam' },
//   { id: '4', name: 'Tad' },
// ];

// console.log(markAdmins(users, adminIds));
// markAdmins(users, adminIds);

// Algo:
// 1. Iterate array
// 2. find same id ==> return true
// 3. add isAdmin to obj

// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];

// DRAFT SOLUTION
// function markAdmins(usersList, adminIds) {
//   let result;
//   const resultArr = [];
//   usersList.forEach(el => {
//     result = { ...el };
//     const { id } = el;

//     if (adminIds.includes(id)) {
//       result.isAdmin = true;
//       resultArr.push(result);
//     } else {
//       result.isAdmin = false;
//       resultArr.push(result);
//     }
//   });
//   return resultArr;
// }

// // examples
// const adminIds = ['1', '3'];
// const users = [
//   { id: '1', name: 'Bob' },
//   { id: '2', name: 'Tom' },
//   { id: '3', name: 'Sam' },
//   { id: '4', name: 'Tad' },
// ];

// // console.log(markAdmins(users, adminIds));
// markAdmins(users, adminIds);

// ======================= STEP: 2 ========================== //
// function markAdmins(usersList, adminIds) {
//   const result = [];
//   usersList.forEach(({ id, isAdmin, ...rest }) => {
//     const obj = { id, isAdmin, ...rest };
//     if (adminIds.includes(id)) {
//       obj.isAdmin = true;
//     } else {
//       obj.isAdmin = false;
//     }
//     result.push(obj);
//   });
//   return result;
// }

// // examples
// const adminIds = ['1', '3'];
// const users = [
//   { id: '1', name: 'Bob' },
//   { id: '2', name: 'Tom' },
//   { id: '3', name: 'Sam' },
//   { id: '4', name: 'Tad' },
// ];

// console.log(markAdmins(users, adminIds));
// markAdmins(users, adminIds);

// ======================= STEP: 3 ========================== //
// function markAdmins(usersList, adminIds) {
//   return usersList.map(userData => {
//     if (adminIds.includes(userData.id)) {
//       return { ...userData, isAdmin: true };
//     } else {
//       return { ...userData, isAdmin: false };
//     }
//   });
// }

// // examples
// const adminIds = ['1', '3'];
// const users = [
//   { id: '1', name: 'Bob' },
//   { id: '2', name: 'Tom' },
//   { id: '3', name: 'Sam' },
//   { id: '4', name: 'Tad' },
// ];

// console.log(markAdmins(users, adminIds));
// markAdmins(users, adminIds);

// ======================= STEP: 4 ========================== //
// function markAdmins(usersList, adminIds) {
//   return usersList.map(userData => {
//     return adminIds.includes(userData.id) === true
//       ? { ...userData, isAdmin: true }
//       : { ...userData, isAdmin: false };
//   });
// }

// // examples
// const adminIds = ['1', '3'];
// const users = [
//   { id: '1', name: 'Bob' },
//   { id: '2', name: 'Tom' },
//   { id: '3', name: 'Sam' },
//   { id: '4', name: 'Tad' },
// ];

// console.log(markAdmins(users, adminIds));
// markAdmins(users, adminIds);

// ======================= STEP: 5 ========================== //
// function markAdmins(usersList, adminIds) {
//   return usersList.map(userData => {
//     return { ...userData, isAdmin: adminIds.includes(userData.id) };
//   });
// }

// // examples
// const adminIds = ['1', '3'];
// const users = [
//   { id: '1', name: 'Bob' },
//   { id: '2', name: 'Tom' },
//   { id: '3', name: 'Sam' },
//   { id: '4', name: 'Tad' },
// ];

// console.log(markAdmins(users, adminIds));
// markAdmins(users, adminIds);
