import {createContext} from 'react';

interface IStudentContext {
  fetchData: () => Promise<any> | null,
}

const contextDefaultValue: IStudentContext = { 
  fetchData: () => {
    return null;
  },
};

const context = createContext<IStudentContext>(contextDefaultValue);

export default context;