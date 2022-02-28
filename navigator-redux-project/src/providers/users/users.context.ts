import {createContext} from 'react';
import { IUser } from 'store/users-reducer/users.types';

interface IUserContext {
  fetchData: () => void,
  getUsers: () => IUser[],
  handleDelete: (id: string) => void,
  handleEdit: (user: IUser) => void,
  handleAdd: (user: IUser) => void,
  getUser: (id: string) => IUser | undefined,
  users: IUser[],
}

// const defaultData: IUser = {"name": "ariel","desc": "ariel mazor123","id": "1"}

const contextDefaultValue: IUserContext = { 
  fetchData: () => {
    return;
  },
  getUsers: () => {
    return [];
  },
  handleEdit: (user: IUser) => {
    return;
  },
  handleDelete: (id: string) => {
    return;
  },
  handleAdd: (user: IUser) => {
    return;
  },
  getUser: (id: string) => {
    return undefined;
  },
  users: [],
};

const context = createContext<IUserContext>(contextDefaultValue);

export default context;