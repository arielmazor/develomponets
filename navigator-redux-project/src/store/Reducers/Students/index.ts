import { IStudent, ActionsTypes } from './types';
import { IActionSetInitData } from "./types"

const StudentsReducer = (state: IStudent[] | [] = [], action: IActionSetInitData) =>{
  console.log(action.type);
  switch(action.type){
    case ActionsTypes.SET_INIT_DATA:{
      console.log([...state, ...action.data]);
      return [...state, ...action.data];}
    default:{
      console.log(action.type)
      return state;}
  }
}

export default StudentsReducer;