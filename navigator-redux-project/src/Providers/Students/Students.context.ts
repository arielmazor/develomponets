import {createContext} from 'react';
import { IStudent } from 'store/Reducers/Students/types';

interface IStudentContext {
  GetStudents: () => void,
}

const contextDefaultValue: IStudentContext = { 
  GetStudents: (): void => {},
};

const context = createContext<IStudentContext>(contextDefaultValue);

export default context;