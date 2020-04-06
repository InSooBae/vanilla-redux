import { createStore } from 'redux';

const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);
console.log(countStore.getState());

countStore.dispatch({ type: 'ADD' });
console.log(countStore.getState());
countStore.dispatch({ type: 'MINUS' });
console.log(countStore.getState());
