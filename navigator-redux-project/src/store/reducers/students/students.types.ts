export const ActionsTypes = {
  ADD_STUDENT: 'ADD_STUDENT',
  DELETE_STUDENT: 'DELETE_STUDENT',
  INIT_DATA: 'INIT_DATA'
}

export interface IStudent {
  name: string,
  desc: string,
  id: number,
}

export interface IStudentAction {
  type: string,
  payload: IPayload,
}

export interface IPayload {
  data?: IStudent,
  id?: number,
  students?: IStudent[]
}