import { createStore } from 'redux';
import reducer from './combinedReducer';
import { IUser } from './users-reducer/users.types';

export interface IState {
  users: IUser[],
};

const store = createStore(reducer);

export default store;