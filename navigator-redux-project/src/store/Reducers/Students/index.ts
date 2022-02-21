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

function handleAddStudent(state: IStudent[], payload: IPayload): IStudent[] {
  return [
    ...state,
    ...[payload.data]
  ];
}

export default function studentsReducer(state: IStudent[] = INITIAL_STATE, action: IStudentAction): IStudent[] {
  switch(action.type) {
    case ActionsTypes.ADD_STUDENT:
      return handleAddStudent(state, action.payload);
    default:
      return state;
  }
}