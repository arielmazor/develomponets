import { ActionsTypes } from './actions.types';

export const increaseCount = () => {
  return ({ type: ActionsTypes.INCREMENT, num:6 });
}

export function decreaseCount() {
  return ({ type: ActionsTypes.DECREMENT});
}

export function resetCount() {
  return ({ type: ActionsTypes.RESET });
}