export enum eActionsTypes{
  NEW_PROFILE = "1",
};

export interface IActionProfileObj{
  id: number,
  name: string
}

export interface IActionProfile {
  type:  string,
  obj: IActionProfileObj
};


export interface  IProfile{
  id: number,
  name: string,
}