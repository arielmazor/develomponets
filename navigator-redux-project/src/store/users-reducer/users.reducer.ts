import { ActionsTypes, IUser, IUserAction} from './users.types'

export default function usersReducer(state: IUser[] = [], action: IUserAction): IUser[] {
  switch(action.type) {
    case ActionsTypes.INIT_DATA:
      return setInitData(action.payload.users);
    case ActionsTypes.ADD_USER:
      return [action.payload.data]//addUser(state, action.payload.data);  //user

    case ActionsTypes.DELETE_USER:
      return deleteusers(state, action.payload.id);

    case ActionsTypes.EDIT_USER:
      return editUser(state, action.payload.user);  //user

    default:
      return state;
  };
};

//------------------
//SetInitData
//------------------

function setInitData(users: IUser[]): IUser[] {
  
  return users;
}

//------------------
//Add users
//------------------

function addUser(state: IUser[], data: IUser): IUser[] {
  return [
    ...state,
    ...[data]
  ];
}

//------------------
//Delete users
//------------------

function deleteusers(users: IUser[], id: string): IUser[] {
  return updateusersList(users, id, null);
}

//-----------------------------
//Edit User
//-----------------------------

function editUser(users: IUser[],user: IUser): IUser[] {  
  return updateusersList(users, user.id, user);
}

//------------------
// privates
//-----------------------------

function updateusersList(users: IUser[], id: string, user: IUser | null){
  
  let index = getusersIndex(users, id);
  if(user){
    setUser(users[index], user)
  }
  let pointer = user ? index + 1 : index;

  const before = users.slice(0, pointer);
  const after = users.slice(pointer + 1, users.length);

  users = before.concat(after);
  return users;
}

//----------------------------

function setUser(users: IUser, user: IUser): IUser{
  users.name = user.name;
  users.desc = user.desc;
  return users;
}

//----------------------------

function getusersIndex(users: IUser[], id: string): number{
  let index = users.findIndex(users => users.id === id);
  return index;
}