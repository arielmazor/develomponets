import React from 'react';
import { ActionsTypes, IStudent, IStudentAction, IPayload} from './students.types'

export default function studentsReducer(state: IStudent[] = [], action: IStudentAction): IStudent[] {
  switch(action.type) {
    case ActionsTypes.INIT_DATA:
      return setData(action.payload.students);
    case ActionsTypes.ADD_STUDENT:
      return addStudent(state, action.payload.data);
    case ActionsTypes.DELETE_STUDENT:
      return deleteStudent(state, action.payload.id)
    default:
      return state;
  };
};

function setData(students: IStudent[] | undefined): IStudent[] {
  return students ? students : [];
}

function addStudent(state: IStudent[], data: IStudent | undefined): IStudent[] {
  return [
    ...state,
    ...[data ? data : {name:"not real",desc:"hello", id:-1}]
  ];
}

function deleteStudent(Students: IStudent[], id: number | undefined): IStudent[] {
  if(typeof id === undefined){
    return Students;
  }
  
  let index = Students.findIndex(student => student.id === id);  
  const before = Students.slice(0, index);
  const after = Students.slice(index + 1, Students.length);
  Students = before.concat(after);
  
  return Students;
}
