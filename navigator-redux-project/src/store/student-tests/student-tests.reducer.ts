import { ActionsTypes, ITest, IStudentsTests , IStudentsTestsAction} from './student-tests.types'

export default function studentTestsReducer(state: IStudentsTests = {}, action: IStudentsTestsAction): IStudentsTests {
  switch(action.type) {
    case ActionsTypes.INIT_TESTS_DATA:
      return setInitData(action.payload.studentsTests);
    default:
      return state;
  };
};

//------------------
// SetInitData
//------------------

function setInitData(studentsTests: IStudentsTests): IStudentsTests {
  return studentsTests;
}