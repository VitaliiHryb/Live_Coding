// 'use strict';

// A lexical environment is a data structure that holds identifier-variable mapping.

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

/* eslint-disable */

// Structure

// Step1: (сканированик) // before execution
// GLOBAL LEX ENV
//   'enviromentRecord': {
//     'run': function,
//      'createMessenger': function,
//   'outherLexicalEnv': null
// }

// Step2: (execution - Global) // in progress of execution
// GLOBAL LEX ENV
//   {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': function,
//      'createMessenger': function,
//      'messanger1': underfined ==> { .... }
//      'messanger2': underfined ==> { .... }
//      'messanger3': underfined ==> { .... }
//   },
//   'outherLexicalEnv': null
// }

// Step3: (execution - messeger1) // in progress of execution
// messeger1 LEX ENV
//   {
//   'enviromentRecord': {
//     'sendMessage': function,
//     'setSender': function,
//     'setMessage': function,
//      'message': ...,
//      'sender': ...,
//    },
//   'outherLexicalEnv': null
// }

// Step4: (execution - messeger2) // in progress of execution
// messeger1 LEX ENV
//   {
//   'enviromentRecord': {
//     'sendMessage': function,
//     'setSender': function,
//     'setMessage': function,
//      'message': ...,
//      'sender': ...,
//    },
//   'outherLexicalEnv': null
// }

// Step 5
// messanger2.sendMessage('James');
//     'enviromentRecord': {
//    'name' ==> 'James'
//    },

// Step6: (execution - messeger3) // in progress of execution
// messeger1 LEX ENV
//   {
//   'enviromentRecord': {
//     'sendMessage': function,
//     'setSender': function,
//     'setMessage': function,
//      'message': ...,
//      'sender': ...,
//      },
//   'outherLexicalEnv': null
//   }

// Step7: (execution - run) // in progress of execution
// messeger1 LEX ENV
//   {
//   'enviromentRecord': {
//     ---- (ссылка на глобальный) // 'RUN' can not use later
//   }

// !!! Lexical Environment DELETE when code finished it's work and nobody refers on it

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  let price = 100;

  function setPrice(newPrice) {
    price = newPrice;
  }

  function printPrice() {
    console.log(price);
  }

  // create lexical environment ==> witch will create 2 more when will use in functions
  if (sender === 'Gromecode') {
    sender = 'Any message';
  }

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    setPrice,
    printPrice,
  };
}

// const messanger = createMessenger();

const messanger1 = createMessenger();
messanger1.setPrice(300);
messanger1.printPrice();

const messanger2 = createMessenger();
messanger2.sendMessage('James');
const messanger3 = createMessenger();

run();

// 6
// 9

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
