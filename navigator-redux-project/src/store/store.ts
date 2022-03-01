import { createStore } from 'redux';
import reducer from './combinedReducer';
import { IStudent } from './students/students.types';

export interface IState {
  students: IStudent[],
};

const store = createStore(reducer);

export default store;