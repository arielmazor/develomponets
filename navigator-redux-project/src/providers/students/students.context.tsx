import {createContext} from 'react';
import { IStudent } from 'store/students/students.types';

interface IStudentContext {
  fetchData: () => void,
  deleteStudent: (id: string) => void,
  updateStudent: (user: IStudent) => void,
  addStudent: (user: IStudent) => void,
  isStudentExist: (id: string | undefined) => boolean,
  students: IStudent[],
}


const contextDefaultValue: IStudentContext = { 
  fetchData: () => {
    return;
  },
  updateStudent: (user: IStudent) => {
    return;
  },
  deleteStudent: (id: string) => {
    return;
  },
  addStudent: (user: IStudent) => {
    return;
  },
  isStudentExist: (id: string | undefined): boolean => {
    return false;
  },
  students: [],
};

const context = createContext<IStudentContext>(contextDefaultValue);

export default context;