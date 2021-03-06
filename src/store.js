import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ id: Date.now(), text: action.payload }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
