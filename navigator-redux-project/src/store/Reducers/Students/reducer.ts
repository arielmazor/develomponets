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
    default:
      return state;
  }
}