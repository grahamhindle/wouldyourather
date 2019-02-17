import { handleActions } from 'redux-actions'
import { GET_QUESTIONS,UPDATE_QUESTION ,UPDATE_QUESTION_ANSWER } from '../constants/actionTypes'



const questions =  handleActions(
  {
  [GET_QUESTIONS]: (state,action) => action.payload,
  [UPDATE_QUESTION]: (state, action) => action.payload,
  [UPDATE_QUESTION_ANSWER]: (state,action) => action.payload
  },
  {}
  )
export default questions
