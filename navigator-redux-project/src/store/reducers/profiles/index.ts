import * as ActionsTypes from '../../actions/actions.types';

const initData: IProfile[] = [
  {
    name:"ariel",
    id:1
  }
];


const profileReducer = (state: IProfile[] = initData, action: any) =>{
  switch(action.type){
    case ActionsTypes.NEW_PROFILE:
      state.push(action.obj);
      return state;
    default:
      return state;
  }
}


export interface IProfile{
  id: number,
  name: string,
}

export default profileReducer;