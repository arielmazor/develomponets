import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { IProfile } from './reducers/profiles';

const store = configureStore({
  reducer: reducers,
});

export interface IStore {
  profileReducer: IProfile[],
}

export default store;