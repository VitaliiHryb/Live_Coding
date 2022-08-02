'use strict';
// context
// 1. what is context?
// обьект, который владеет вызовом функции

// “context” refers to an object.
// Within an object, the keyword “this” refers to that object (i.e. “self”),
// and provides an interface to the properties and methods
// that are members of that object.
// When a function is executed, the keyword “this” refers to the object
// that the function is executed in.

// контекст нужен для передачи данных
// контекст нужен для того что бы функции удобно могли делится данными

// 2. when context is lost?
// 3. how to fix context?

// // Примеры
// 'use strict'; // window ==> undefined

// const price = 100; // shoudn't use like this

// function getName() {
//   console.log(this);

//   if (price > 10) {
//     return null;
//   }

//   return 'James';
// }

// getName();
// // window.getName(); // without strict mode

// const obj = {
//   run: () => {
//     console.log(obj);
//   },
// };

// obj.run();

//---------------------------------------------------------------------------
// TIMER (LC)
// startTimer
// input -
// output -
// .setInterval()
// var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
// func - функция, которая будет вызываться каждые delay миллисекунд.

const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    // console.log('startTimer context', this);

    // setInterval(function () { // стрелочная функция исправляет контекст
    // arrow funct bind parent scope
    this.intervalID = setInterval(() => {
      // console.log('callback context', this);
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      console.log(this.getTimer());
    }, 1000);
  },

  // with bind
  //   // option 1
  //   setInterval(
  //     function () {
  //       // стрелочная функция исправляет контекст
  //       // console.log('callback context', this);
  //       this.secondsPassed += 1;
  //     }.bind(this),
  //     1000,
  //   );
  // },

  //   // option 2
  //   const callback = function () {
  //     // console.log('callback context', this);
  //     this.secondsPassed += 1;
  //   };
  //   const bindedCallback = callback.bind(this);
  //   setInterval(bindedCallback, 1000);
  // },
  stopTimer() {
    clearInterval(this.intervalID);
  },

  getTimer() {
    return `${this.minsPassed}:${String(this.secondsPassed).padStart(2, '0')}`;
  },

  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// test data
timer.startTimer(); // context +
// timer.stopTimer();
// timer.resetTimer();

// contest lost:

// 1. function called separatly
// const func = timer.startTimer;
// func(); // context -

// // // manipulation ???!
// const func = timer.startTimer();
// func().bind({ secondsPassed: 'context lost' }); // context -

// 2. callback function

// 3. nested function
// nested function is a function that is defined inside
// or within another function.

export { timer };

//---------------------------------------------------------------------------
// // Timer (my old solution)

// // format: '1:05'
// // string.padStart(2, '0')

// // algo
// // 1. getTime: console.log(`${minsPassed}:${secondsPassed}.padStart(2, '0')`);
// // 2. startTimer
// // 2.1. every 1s console.log(getTime)
// // 2.2. if (secondsPassed === 60) ==> minsPassed++ and secondsPassed = 0;
// // 2.3 use setInterval
// // 3. stopTimer
// // 3.1. use clearInterval(timerId)
// // 4. resetTimer

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   timerId: undefined,

//   getTime() {
//     return `${this.minsPassed}:${String(this.secondsPassed).padStart(2, '0')}`;
//   },

//   startTimer() {
//     this.timerId = setInterval(
//       function () {
//         this.secondsPassed++;
//         if (this.secondsPassed === 60) {
//           this.minsPassed++;
//           this.secondsPassed = 0;
//         }
//         console.log(this.getTime());
//       }.bind(this),
//       1000,
//     );
//   },

//   stopTimer() {
//     clearInterval(this.timerId);
//   },

//   resetTimer() {
//     this.secondsPassed = 0;
//     this.minsPassed = 0;
//   },
// };

// timer.startTimer();
// // timer.stopTimer();
// // timer.resetTimer();

// // export { timer }
