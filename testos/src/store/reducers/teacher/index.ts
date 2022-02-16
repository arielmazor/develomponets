import { ITeacher } from './types';

const initTeacherData: ITeacher = {
  name:"ariel",
  id:1,
};


const userReducer = (state: ITeacher = initTeacherData, action: any) =>{
  switch(action.type){
    default:
      return state;
  }
}

export default userReducer;