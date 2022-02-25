export enum ActionsTypes {
  ADD_USER = 'ADD_USER',
  DELETE_USER = 'DELETE_USER',
  INIT_DATA = 'INIT_DATA',
  EDIT_USER = 'EDIT_USER'
}

export interface IUser {
  name: string,
  desc: string,
  id: number,
}

export interface Iuser {
  name: string,
  email: string,
  id: number,
}

//------------------
//Payloads Interfaces
//------------------

export interface IPayloadEdit {
  user: Iuser
}

export interface IPayloadDelete {
  id: number,
}

export interface IPayloadInit {
  users: IUser[], 
}
export interface IPayloadAdd {
  data: IUser, 
}

//------------------
//Actions Interfaces
//------------------

export interface IUserActionAdd {
  type: ActionsTypes.ADD_USER,
  payload: IPayloadAdd,
}

export interface IUserActionEdit {
  type: ActionsTypes.EDIT_USER,
  payload: IPayloadEdit,
}

export interface IUserActionDelete {
  type: ActionsTypes.DELETE_USER,
  payload: IPayloadDelete,
}

export interface IUserActionInit {
  type: ActionsTypes.INIT_DATA,
  payload: IPayloadInit,
}


//------------------
//Main IAction Type
//------------------

export type IUserAction = IUserActionAdd | IUserActionDelete | IUserActionInit | IUserActionEdit;