import { createAction } from "redux-actions"
import {  UPDATE_QUESTION, GET_QUESTIONS,UPDATE_QUESTION_ANSWER } from "../constants/actionTypes"
import {_getQuestions  } from '../utils/_Data'
import { apiStart ,apiEnd} from './apiActions';


export const updateQuestionQuestion = createAction(UPDATE_QUESTION)
export const getQuestions = createAction (GET_QUESTIONS)
export const updateQuestionAnswer=createAction(UPDATE_QUESTION_ANSWER)



export function getQuestionData() {
  return (dispatch) => {
    return _getQuestions()
      .then((questions) => {
        dispatch(apiStart(GET_QUESTIONS))
        dispatch(getQuestions(questions))
        dispatch(apiEnd(GET_QUESTIONS))
      
      })
    }
}