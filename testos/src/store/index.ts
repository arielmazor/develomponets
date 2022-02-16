import {createStore} from 'redux';
import reducer from './reducers';
import { ITeacher } from './reducers/teacher/types';
import { IStudent } from './reducers/students/types';
import { ILesson } from './reducers/lessons/types';

export interface IState {
  teacher: ITeacher,
  students: IStudent[],
  lessons: ILesson[],
};
const store = createStore(reducer);

export default store;