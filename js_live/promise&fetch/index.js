const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form // const formFields = [...new FormData(formElem)];
  // вместо формы
  const user = {
    email: 'test@gmail.com',
    name: 'Vitalii Hryb',
    password: '4444',
  };

  console.log(' 1 ', JSON.stringify(user));

  // http request
  // use POST method

  // fetch()
  // input: url, obj;
  // output: promise;

  // then()
  // input: callback(onFulFilled), callback(onRejected)
  // output: promise;

  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      console.log(' 2 - ');
      return response.json();
    })
    .then(data => {
      console.log(' 3 - ');
      alert(data);
    })
    .catch(err => alert('error happened'));

  console.log(' 4 - done');
}

formElem.addEventListener('submit', createUserHandler);

// function createUserHandler(event) {
//   event.preventDefault();

//   // read form // const formFields = [...new FormData(formElem)];
//   // вместо формы
//   const user = {
//     email: 'test@gmail.com',
//     name: 'Vitalii Hryb',
//     password: '123',
//   };

//   console.log(JSON.stringify(user));

//   // http request
//   // use POST method

//   // fetch()
//   // input: url, obj;
//   // output: promise;

//   // then()
//   // input: callback(onFulFilled), callback(onRejected)
//   // output: promise;

//   const httpPromise = fetch(serverUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const thenResult = httpPromise.then(response => {
//     // console.log(response);
//     return response.json();
//   });

//   thenResult
//     .then(data => {
//       alert(data);
//     })
//     .catch(err => {
//       alert('error happened');
//     });
// }
