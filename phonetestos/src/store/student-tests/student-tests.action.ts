import { ActionsTypes, IStudentTests } from './student-tests.types';

export function initDataAction(studentTests: IStudentTests, id: string) {
  return ({ 
    type: ActionsTypes.INIT_TESTS_DATA,
    payload:{ studentTests, id } 
  });
};