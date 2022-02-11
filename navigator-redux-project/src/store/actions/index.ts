import * as ActionsType from "./actions.types"

export const NEW_PROFILE = (obj: Object) => {
  return{
    type: ActionsType.NEW_PROFILE,
    obj,
  }
}