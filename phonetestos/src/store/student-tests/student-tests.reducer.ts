import { ActionsTypes, ITest, IStudentsTests, IStudentTests , IStudentsTestsAction} from './student-tests.types'

export default function studentTestsReducer(state: IStudentsTests = {}, action: IStudentsTestsAction): IStudentsTests {
  switch(action.type) {
    case ActionsTypes.INIT_TESTS_DATA:
      
      return setInitData(state, action.payload.studentTests, action.payload.id);
    default:
      return state;
  };
};

//------------------
// SetInitData
//------------------

function setInitData(studentsTests: IStudentsTests, studentTests: IStudentTests, id: string): IStudentsTests {
  studentsTests[id] = studentTests;
  return studentsTests;
}