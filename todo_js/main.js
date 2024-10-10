import { createStore } from "redux";

const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO'

const actionAddTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const actionDelTodo = (id) => {
  return {
    type: DEL_TODO,
    id
  }
}

// reducer
const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

// subscribe
store.subscribe(() => console.log(store.getState()));

const deleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(actionDelTodo(id));
}

const drawList = () => {
  const todos = store.getState();
  $ul.innerHTML = '';
  todos.forEach(todo => {
    const $li = document.createElement('li');
    const $delBtn = document.createElement('button');
    $delBtn.innerText = 'DEL';
    $delBtn.addEventListener('click', deleteTodo);
    $li.id = todo.id;
    $li.innerText = todo.text;
    $li.appendChild($delBtn);
    $ul.appendChild($li);
  });
}

store.subscribe(drawList);

// dispatch
const onSubmit = (e) => {
  e.preventDefault();
  const todo = $input.value;
  $input.value = '';
  store.dispatch(actionAddTodo(todo));
};

$form.addEventListener('submit', onSubmit);