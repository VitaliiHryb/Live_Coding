// 'use strict';
// ----------------------------------------------------------------------------------
// JavaScript scope
// ----------------------------------------------------------------------------------
// JavaScript scope (область видимости функции, область видимости блока)
// определяет зону, где переменная доступна

// лексическая область видимости определяется временем написания кода,
// тогда как динамическая область видимости определяется во время выполнения программы.
// Лексическую область видимости интересует,
// где функция была объявлена, а динамическую — откуда была вызвана функция.

// ----------------------------------------------------------------------------------
// Замыкания
// ----------------------------------------------------------------------------------

// Замыкание — это комбинация функции и лексического окружения,
// в котором эта функция была определена.

// В JavaScript замыкания создаются каждый раз при создании функции,
// во время её создания.

/* eslint-disable */

// const records = [1, 2, 3];

const createLogger = () => {
  const records = [];

  return {
    warn(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords(type) {
      return (type ? records.filter(el => el.type === type) : records).sort(
        (a, b) => b.dateTime - a.dateTime,
      );
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

const logger2 = createLogger();
logger2.log('sdsdsdsd');

console.log(logger2.getRecords());

// simple example /---explanation---/

function wrappar() {
  const records = [1, 2, 3];

  function go(param) {
    records.push(param);
    console.log(records);
  }

  go(777);

  return go;
}

const runner1 = wrappar();
runner1(7);
runner1(8);
runner1(9);
runner1(10);
runner1(11);
runner1(12);

const runner2 = wrappar();
runner2(17);
runner2(18);
runner2(19);
runner2(20);
runner2(21);
runner2(22);

// ----------------------------------------------------------------------------------
// A lexical environment is a data structure that holds identifier-variable mapping.
// ----------------------------------------------------------------------------------

// Lexical Environment is the environment of the function where it is written.
// That is, the static order/place where it is situated,
// regardless from where it is called from.
// Scope of a variable/function is basically the locations from where a variable
// is visible/accessible.

// when js find if() {} ===> create lexical environment

// 1. global (запускается скрипт)
// 2. function (запускается функция)
// 3. function (запускается функция)
// 4! function console.log() ==> create lexical environment // But we don't care about it

// GLOBAL LEX ENV
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }
