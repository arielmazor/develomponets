import { ActionsTypes, IStudentsTests } from './student-tests.types';

export function initDataAction(studentsTests: IStudentsTests) {
  return ({ 
    type: ActionsTypes.INIT_TESTS_DATA,
    payload:{ studentsTests } 
  });
};