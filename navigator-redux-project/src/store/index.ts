import { createStore } from 'redux';
import reducer from './Reducers';
import { IStudent } from './Reducers/Students/types';

export interface IState {
  students: IStudent[],
};

const store = createStore(reducer);

export default store;