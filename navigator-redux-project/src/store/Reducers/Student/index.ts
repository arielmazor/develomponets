import { ActionsTypes, IStudent, IStudentAction, IPayload} from './types'

const INITIAL_STATE: IStudent[] = [
  {
    name: "ariel",
    id: 1,
  },
  {
    name: "assaf",
    id: 2,
  },
  {
    name: "ruth",
    id: 3,
  },
]

function handleDeleteStudent(state: IStudent[], payload: IPayload): IStudent[] {
  const filteredItems = state.filter((student: IStudent) => {
    return student.id !== payload.id
  });

  return [...filteredItems];
}

export default function studentsReducer(state: IStudent[] = INITIAL_STATE, action: IStudentAction): IStudent[] {
  switch(action.type) {
    case ActionsTypes.DELETE:
      debugger;
      return handleDeleteStudent(state, action.payload);
    default:
      return state;
  }
}