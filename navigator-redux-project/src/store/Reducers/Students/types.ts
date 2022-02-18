export const ActionsTypes = {
  SET_INIT_DATA : "SET_INIT_DATA",
};

export interface IActionSetInitData {
  type:  string,
  data: IStudent[]
};


export interface  IStudent{
  id: number,
  name: string,
}