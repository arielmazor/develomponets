export enum ActionsTypes {
  INIT_TESTS_DATA = 'INIT_TESTS_DATA',
}

export interface IStudentsTests {
  [key: string]: IStudentTests,
}

export interface IStudentTests {
  [key: string]: ITest[],
}

export interface ITest {
  id: string,  
  name: string,
  date: string,
  grade: string,
}

//------------------
//Payloads Interfaces
//------------------

export interface IPayloadInit {
  studentTests: IStudentTests, 
  id: string
}

//------------------
//Actions Interfaces
//------------------

export interface IStudentTestsActionInit {
  type: ActionsTypes.INIT_TESTS_DATA,
  payload: IPayloadInit,
}


//------------------
//Main IAction Type
//------------------

export type IStudentsTestsAction = IStudentTestsActionInit;