import { ActionType } from "../action/actions"
import initialState from "./initialState"

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_DATA:
      const user = { ...state.user }
      for (const key in action.value) {
        user[key] = action.value[key]
      }
      return {
        ...state,
        user: user,
      }
    default:
      return state
  }
}
export default rootReducer
