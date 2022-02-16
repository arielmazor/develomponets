import { ILesson } from './types';

const initLessonsData: ILesson[] = [
  {
   name:"React Leson",
   id:1,
  },
];


const LessonsReducer = (state: ILesson[] = initLessonsData, action: any) =>{
  switch(action.type){
    default:
      return state;
  }
}

export default LessonsReducer;