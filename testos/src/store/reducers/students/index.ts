import { IStudent } from './types';

const initStudentsData: IStudent[] = [
  {
    name:"ariel",
    id:1,
  },
  {
    name:"ariel",
    id:2,
  },
]

const TeacherReducer = (state: IStudent[] = initStudentsData, action: any) =>{
  switch(action.type){
    default:
      return state;
  }
}

export default TeacherReducer;