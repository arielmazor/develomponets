import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './combinedReducer';
import { IStudent } from './students/students.types';
import { IStudentsTests } from './student-tests/student-tests.types';

export interface IState {
  students: IStudent[],
  studentsTests: IStudentsTests,
};

const store = createStore(
  reducer,
  composeWithDevTools()  
  );

export default store;