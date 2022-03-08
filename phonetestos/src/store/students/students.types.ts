export enum ActionsTypes {
  ADD_STUDENT = 'ADD_STUDENT',
  DELETE_STUDENT = 'DELETE_STUDENT',
  INIT_DATA = 'INIT_DATA',
  EDIT_STUDENT = 'EDIT_STUDENT'
}

export interface IStudent {
  name: string,
  desc: string,
  id: string,
}

//------------------
//Payloads Interfaces
//------------------

export interface IPayloadUpdate {
  student: IStudent
}

export interface IPayloadDelete {
  id: string,
}

export interface IPayloadInit {
  students: IStudent[], 
}
export interface IPayloadAdd {
  data: IStudent, 
}

//------------------
//Actions Interfaces
//------------------

export interface IStudentActionAdd {
  type: ActionsTypes.ADD_STUDENT,
  payload: IPayloadAdd,
}

export interface IStudentActionUpdate {
  type: ActionsTypes.EDIT_STUDENT,
  payload: IPayloadUpdate,
}

export interface IStudentActionDelete {
  type: ActionsTypes.DELETE_STUDENT,
  payload: IPayloadDelete,
}

export interface IStudentActionInit {
  type: ActionsTypes.INIT_DATA,
  payload: IPayloadInit,
}


//------------------
//Main IAction Type
//------------------

export type IStudentAction = IStudentActionAdd | IStudentActionDelete | IStudentActionInit | IStudentActionUpdate;