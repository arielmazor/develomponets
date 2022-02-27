import { ActionsTypes, IUser } from './users.types';

function randomId(min: number, max: number){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function addUser() {
  
  return ({
    type: ActionsTypes.ADD_USER,
    payload:{
    data: {
      name:"test",
      desc:"desc...",
      id: randomId(10, 100000),
    }}
  });
};

export function editUser(user: IUser){
    return({
      type: ActionsTypes.EDIT_USER,
      payload:{ user }
    })
}

export function deleteusers(id: number) {
  return ({ 
    type: ActionsTypes.DELETE_USER,
    payload:{ id } 
  });
};

export function initData(users: IUser[]) {
  
  return ({ 
    type: ActionsTypes.INIT_DATA,
    payload:{ users } 
  });
};