// How to work on tech task. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// is number is Prime number from  1 to n:

// input: number
// outut: undefined

// algo
// 1. iterate from 2 to num
// 2. check if N prime
// 2.1 iterate from 2 to N
// 2.2 if N % iterator ==> 0 then not prime
// 3. if Prime - print it

function isPrime(num) {
  let isPrime = true;

  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

// --- testData
// getPrimes(3);
// getPrimes(7);
// getPrimes(15);
// getPrimes(33);
// getPrimes(99);

// function getPrimes(num) {
//   for (let number = 2; number <= num; number++) {
//     let isPrime = true;

//     for (let index = 2; index < number; index++) {
//       if (number % index === 0) {
//         isPrime = false;
//       }
//     }

//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }
