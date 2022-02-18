export const ActionsTypes = {
  NEW_USER: 'NEW_USER',
};

export interface IActionNewUser {
  type:  string,
  obj: IUser,
};

export interface IUser{
  id: number,
  name: string,
  role: number,
}