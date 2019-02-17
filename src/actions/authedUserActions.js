import { createAction } from "redux-actions"
import { SET_AUTHED_USER,GET_AUTHED_USER } from '../constants/actionTypes'

export const getAuthedUser = createAction(GET_AUTHED_USER)
export const setAuthedUser = createAction(SET_AUTHED_USER)


