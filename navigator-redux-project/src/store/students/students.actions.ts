import { ActionsTypes, IStudent } from './students.types';

function randomId(min: number, max: number){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function addStudentAction() {
  
  return ({
    type: ActionsTypes.ADD_STUDENT,
    payload:{
    data: {
      name:"test",
      desc:"desc...",
      id: randomId(10, 100000),
    }}
  });
};

export function updateStudentAction(student: IStudent){
    return({
      type: ActionsTypes.EDIT_STUDENT,
      payload:{ student }
    })
}

export function deleteStudentAction(id: number) {
  return ({ 
    type: ActionsTypes.DELETE_STUDENT,
    payload:{ id } 
  });
};

export function initDataAction(students: IStudent[]) {
  return ({ 
    type: ActionsTypes.INIT_DATA,
    payload:{ students } 
  });
};