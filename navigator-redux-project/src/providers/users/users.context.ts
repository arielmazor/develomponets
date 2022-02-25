import {createContext} from 'react';

interface IUserContext {
  fetchData: () => Promise<any> | null,
}

const contextDefaultValue: IUserContext = { 
  fetchData: () => {
    return null;
  },
};

const context = createContext<IUserContext>(contextDefaultValue);

export default context;