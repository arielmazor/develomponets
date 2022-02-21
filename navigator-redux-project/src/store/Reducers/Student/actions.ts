import { ActionsTypes } from './types';

export function deleteStudent(id: number) {
  console.log("🚀 ~ file: actions.ts ~ line 5 ~ deleteStudent ~ ActionsTypes.DELETE", ActionsTypes.DELETE)
  return ({ type: ActionsTypes.DELETE, payload:{id} });
};