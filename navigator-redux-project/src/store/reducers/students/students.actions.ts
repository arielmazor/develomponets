import { ActionsTypes, IStudent } from './students.types';

function randomId(min: number, max: number){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function addStudent() {
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

export function deleteStudent(id: number) {
  return ({ 
    type: ActionsTypes.DELETE_STUDENT,
    payload:{ id } 
  });
};

export function initData(students: IStudent[]) {
  return ({ 
    type: ActionsTypes.INIT_DATA,
    payload:{ students } 
  });
};