import { eActionsTypes, IActionProfile, IProfile } from "./types";

export const NEW_PROFILE = (obj: IProfile) => {
  return{
    type: eActionsTypes.NEW_PROFILE,
    obj,
  }
};