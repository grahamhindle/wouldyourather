import { createAction } from "redux-actions"
import { GET_USERS,UPDATE_USER_QUESTION,UPDATE_USER_ANSWER } from '../constants/actionTypes'
import {_getUsers } from '../utils/_Data'
import { apiStart, apiEnd } from "./apiActions";



export const getUsers = createAction(GET_USERS)
export const updateUserQuestion = createAction(UPDATE_USER_QUESTION)
export const updateUserAnswer=createAction(UPDATE_USER_ANSWER)


export function getUserData() {
  return (dispatch) => {
    return _getUsers()
      .then((users) => {
        dispatch(apiStart('GET_USERS'))
        dispatch(getUsers(users))
        dispatch(apiEnd('GET_USERS'))
      
      })
    }
}
