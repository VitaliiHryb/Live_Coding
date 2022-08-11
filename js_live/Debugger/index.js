// events
// 1. types of events (top-5)
// 2. add events (which event type & on which element)
// 3. handlers

// WEB FLOW
// 1. get data
// 2. render
// 3. update data, don't update DOM (!!!!)
// 4. re-render

const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  // debugger;

  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// ======
const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderTasks(tasks);
};

listElem.addEventListener('click', onToggleTask);

// HOW TO WORKS WITH BUGS:
// 1. ВИЗНАЧИТИ ТОЧКУ ВХОДА ЛАНЦЮЖКА
// 2. ПЕРЕВІРИТИ РОБОТУ ЛАНЦЮЖКА КОДУ (DEBUGGER)
// 2.1. локалізуємо проблему
// 3. FIX

// 80%
// - Reading someone else code
// - Debug code
// - Testing
// 20%
// - Writing code
