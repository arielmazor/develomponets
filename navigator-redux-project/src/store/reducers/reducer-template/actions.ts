import { ActionsTypes } from './actions.types';

export const changeName = () => {
  return ({
   type: ActionsTypes.CHANGE_NAME,
   payload: {
     name:"ariel"
  }});
}

export function decreaseCount() {
  return ({ 
    type: ActionsTypes.DECREMENT
  });
}

export function resetCount() {
  return ({ 
    type: ActionsTypes.RESET
  });
}