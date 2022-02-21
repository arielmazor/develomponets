import { ActionsTypes } from './actions.types'

const INITIAL_STATE = [
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

function handleChange(state: any, payload: any) {

  return [
    ...state,
    ...payload
  ];
}

export default function counter(state: any = INITIAL_STATE, action: any) {
  switch(action.type) {
    case ActionsTypes.CHANGE_NAME:
      console.log("🚀 ~ file: index.ts ~ line 30 ~ counter ~ handleChange(state, action.payload)", handleChange(state, action.payload))
      return handleChange(state, action.payload);
    default:
      return state;
  }
}