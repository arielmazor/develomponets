import { IProfile, eActionsTypes } from './types';
import { IActionProfile } from "./types"
const initProfileData: IProfile[] = [
  {
    name:"ariel",
    id:1
  },
];

const profileReducer = (state: IProfile[] = initProfileData, action: IActionProfile) =>{
  switch(action.type){
    case eActionsTypes.NEW_PROFILE:
      state.push(action.obj);
      return state;
    default:
      return state;
  }
}

export default profileReducer;