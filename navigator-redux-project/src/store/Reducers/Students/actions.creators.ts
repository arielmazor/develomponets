import { ActionsTypes, IActionSetInitData, IStudent } from "./types";

export const SET_INIT_DATA = (data: IStudent[]): IActionSetInitData => {
  return{
    type: ActionsTypes.SET_INIT_DATA,
    data,
  }
};