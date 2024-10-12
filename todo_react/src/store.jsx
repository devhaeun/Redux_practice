import {createStore} from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction("ADD");
const deleteToDo = createAction("DEL");

// reducer
const reducer = createReducer([], (builder) => {
    builder
    .addCase(addToDo, (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) =>
        state.filter(toDo => toDo.id !== action.payload)
    )
});

// store
const store = createStore(reducer);

// subscribe

// dispatch

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;