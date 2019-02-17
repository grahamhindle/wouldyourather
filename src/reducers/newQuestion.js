import { handleActions } from 'redux-actions'
import { SET_NEW_QUESTION } from '../constants/actionTypes'


export default handleActions(
  {
  [SET_NEW_QUESTION]: (state, action) => action.payload
  }, 
  {}
)