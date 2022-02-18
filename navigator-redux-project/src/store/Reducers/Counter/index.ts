import { ActionsTypes } from './actions.types'

const INITIAL_STATE = {
  count: 0,
  history: [],
}

function handleChange(state: any, change: any) {
  const {count, history} = state;
  return ({
    count: count + change,
    history: [count + change, ...history]
  })
}

export default function counter(state = INITIAL_STATE, action: any) {
  const {count, history} = state;
  switch(action.type) {
    case ActionsTypes.INCREMENT:
      return handleChange(state, action.num);
    case ActionsTypes.DECREMENT:
      return handleChange(state, -1);
    case ActionsTypes.RESET:
      return (INITIAL_STATE)
    default:
      return state;
  }
}