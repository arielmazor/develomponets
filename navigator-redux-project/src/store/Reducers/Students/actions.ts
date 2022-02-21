import { ActionsTypes } from './types';

export function addStudent() {
  return ({ type: ActionsTypes.ADD_STUDENT, payload:{data: {name:"test", id: 4,}} });
};