import { createStore } from 'redux';
import reducer from './reducers/combinedReducer';
import { IStudent } from './reducers/students/students.types';

export interface IState {
  students: IStudent[],
};

const store = createStore(reducer);

export default store;