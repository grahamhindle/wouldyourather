import { handleActions } from "redux-actions";
import produce from "immer";
import { API_START, API_END,GET_QUESTIONS,GET_USERS,APP_INIT } from "../constants/actionTypes"

const isLoading = handleActions(
  {
    [API_START]: produce((state, action) => {
      if (action.payload === GET_QUESTIONS) state[GET_QUESTIONS] = true
      if (action.payload === GET_USERS) state[GET_USERS] = true
      if (action.payload === APP_INIT) state[APP_INIT] = true
    }),
    [API_END]: produce((state, action) => {
      if (action.payload === GET_QUESTIONS) state[GET_QUESTIONS] = false
      if (action.payload === GET_USERS) state[GET_USERS] = false
      if (action.payload === APP_INIT) state[APP_INIT] = false
    })
},
{} )
export default isLoading



