import { createStore } from "redux";

const $add = document.getElementById('add');
const $minus = document.getElementById('minus');
const $count = document.getElementById('count');

$count.innerText = 0;

const ADD = 'ADD';
const MINUS = 'minus';

// reducer
const countModify = (count=0, action) => {
  switch (action.type) {
    case ADD:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
}

// store
const countStore = createStore(countModify);

// subscribe
const onChange = () => {
  $count.innerText = countStore.getState();
}

countStore.subscribe(onChange);

// dispatch
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}

$add.addEventListener('click', handleAdd);
$minus.addEventListener('click', handleMinus);