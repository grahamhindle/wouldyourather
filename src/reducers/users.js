import { handleActions } from 'redux-actions'
import { GET_USERS,UPDATE_USER_QUESTION, UPDATE_USER_ANSWER } from '../constants/actionTypes'


const users = handleActions(
  {
  [GET_USERS]: (state ,action) => action.payload,
  
  [UPDATE_USER_QUESTION]:(state ,action) => action.payload,

  [UPDATE_USER_ANSWER]: (state,action) => action.payload

  },
  {}
)
export default users


