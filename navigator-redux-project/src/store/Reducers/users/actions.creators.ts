import { ActionsTypes, IUser, IActionNewUser } from "./types";

export const SET_INIT_DATA = (obj: IUser): IActionNewUser => {
  return{
    type: ActionsTypes.NEW_USER,
    obj,
  }
};