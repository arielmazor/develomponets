import {createStore} from 'redux';
import reducer from './reducers';
import {IUser} from './reducers/users/types';
import {IProfile} from './reducers/profiles/types';

export interface IState {
  profiles: IProfile[],
  users: IUser[]
};
const store = createStore(reducer);

export default store;