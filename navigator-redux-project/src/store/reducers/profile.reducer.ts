const initData = {
  profiles:[
  {
    name:"ariel",
    id:1
  }
]
}

const profileReducer = (state: any = initData, action: any) =>{
  switch(action.type){
    case 'NEW_PROFILE':
      return state.push(action.obj);
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default profileReducer;