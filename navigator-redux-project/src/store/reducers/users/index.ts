import { IUser } from './types';

const initProfileData: IUser[] = [
  {
    name:"ariel",
    id:1,
    role: 6,
  },
];

const userReducer = (state: IUser[] = initProfileData, action: any) =>{
  switch(action.type){
    default:
      return state;
  }
}

export default userReducer;