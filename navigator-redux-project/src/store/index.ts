import { createStore } from 'redux';
import reducer from './Reducers';
import { IUser } from './Reducers/users/types';
import { IStudent } from './Reducers/Students/types';

export interface IState {
  students: IStudent[],
  users: IUser[]
};

const store = createStore(reducer);

export default store;