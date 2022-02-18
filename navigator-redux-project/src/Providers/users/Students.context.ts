import {createContext} from 'react';
import { IStudent } from 'store/Reducers/Students/types';

export const LoadingState = {
  loading: false
};
const Context = createContext(LoadingState);


export default Context;