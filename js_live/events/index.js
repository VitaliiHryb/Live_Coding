// HTML Events
// events
// 1. types of events (top-5)
// 2. add events (whitch event tyle $ on whitch elements)
// 3. handlers
// addEventListener
// removeEventListener

// lesson 23 Todo List
// WEB FLOW

// 1. get data
// 2. render
// 3. update data (don't update DOM)
// 4. re-render

const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];

const listElem = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.textContent = '';
  listElem.append(...tasksElems);
};

function addNewTask() {
  const taskInput = document.querySelector('.task-input');

  if (taskInput.value.length === 0) {
    return;
  }

  tasks.push({ text: taskInput.value, done: false, id: `${tasks.length + 1}` });
  taskInput.value = '';
  renderTasks(tasks);
}

const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  taskData.done = e.target.checked;
  renderTasks(tasks);
};

renderTasks(tasks);

createButton.addEventListener('click', addNewTask);
listElem.addEventListener('click', onToggleTask);

// algo createNewTask
// 0. read input
// 1. create task obj
// 2. add obj to the array
// 3. re-render

// IGOR (norm)
// const createNewTask = () => {
//   const taskInputField = document.querySelector('.task-input');
//   const inputFieldValue = taskInputField.value;
//   if (inputFieldValue === '') {
//     return;
//   }
//   const newTask = {
//     text: inputFieldValue,
//     done: false,
//   };
//   tasks.push(newTask);
//   taskInputField.value = '';
//   taskInputField.innerHTML = '';
//   listElem.innerHTML = '';
//   renderTasks(tasks);
// };

// // after refactoring
// const createNewTask = () => {
//   const inputEl = document.querySelector('.task-input').value;
//   const inputValue = inputEl.value;

//   if (inputValue === '') {
//     return;
//   }

//   tasks.push({ text: inputValue, done: false });

//   inputValue.value = '';

//   renderTasks(tasks);
// };

// createButton.addEventListener('click', createNewTask);
// // createNewTask ==> createTaskHandler

// renderTasks(tasks);

// perfect solution by Andrii
// const onToggleTask = e => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const taskData = tasks.find(task => task.id === e.target.dataset.id);
//   Object.assign(taskData, { done: e.target.checked });
//   renderTasks(tasks);
// };

// listElem.addEventListener('click', onToggleTask);

// when we add something - delet etc.

// ================================
// function completeTask(event) {
//   const isCheckbox = event.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }
//   const checkboxId = event.target.dataset.id;

//   const seekedTask = tasks.find(el => checkboxId === el.id);
//   seekedTask.done = event.target.checked;

//   renderTasks(tasks);
// }
// ======================================================

// DRAFT SOLUTION
// const tasks = [
//   { text: 'Buy milk', done: false, id: '1' },
//   { text: 'Pick up Tom from airport', done: false, id: '2' },
//   { text: 'Visit party', done: false, id: '3' },
//   { text: 'Visit doctor', done: true, id: '4' },
//   { text: 'Buy meat', done: true, id: '5' },
// ];

// const listElem = document.querySelector('.list');

// const renderTasks = tasksList => {
//   listElem.innerHTML = '';
//   const tasksElems = tasksList
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       const checkbox = document.createElement('input');
//       checkbox.setAttribute('type', 'checkbox');
//       checkbox.checked = done;
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       listItemElem.append(checkbox, text);

//       return listItemElem;
//     });

//   listElem.append(...tasksElems);
// };

// const createButton = document.querySelector('.create-task-btn');

// const addNewTask = () => {
//   const newTask = document.querySelector('.task-input');
//   const inputText = newTask.value;
//   const newTaskId = tasks.length + 1;
//   const stringToObj = `{ "text": "${inputText}", "done": false, "id": "${newTaskId}" }`;
//   const newObj = JSON.parse(stringToObj);
//   console.log(newObj); // => error
//   tasks.push(newObj);

//   renderTasks(tasks);
// };

// createButton.addEventListener('click', addNewTask);

// const ontoggle = e => {
//   const isCheckbox = e.target;
//   if (isCheckbox.type === 'checkbox') {
//     if (isCheckbox.checked) {
//       isCheckbox.parentElement.classList.add('list__item_done');
//     } else {
//       isCheckbox.parentElement.classList.remove('list__item_done');
//     }
//   }
// };

// listElem.addEventListener('click', ontoggle);

// renderTasks(tasks);

// ======================================================
