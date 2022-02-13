import { eActionsTypes, IActionProfile } from "./types";

export const NEW_PROFILE = (obj: IActionProfile) => {
  return{
    type: eActionsTypes.NEW_PROFILE,
    obj,
  }
};