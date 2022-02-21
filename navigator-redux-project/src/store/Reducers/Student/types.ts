export const ActionsTypes = {
  DELETE: 'DELETE',
}

export interface IStudent {
  name: string,
  id: number,
}

export interface IStudentAction {
  type: string,
  payload: IPayload,
}

export interface IPayload {
  id: number,
}