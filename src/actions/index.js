
import { getQuestions,updateQuestionQuestion, updateQuestionAnswer  } from './questionActions'
import { getUsers, updateUserQuestion, updateUserAnswer } from './userActions'
import { setAuthedUser } from './authedUserActions'
import { _saveQuestion, getInitialData, _saveQuestionAnswer} from '../utils/_Data'
import { apiStart, apiEnd } from './apiActions'
import { GET_QUESTIONS,APP_INIT,UPDATE_ANSWER,UPDATE_QUESTION_ANSWER } from "../constants/actionTypes";


  export function saveNewQuestion(question) {
    return (dispatch) => {
      return _saveQuestion (question)
        .then(({users,questions}) => {
          dispatch (apiStart(GET_QUESTIONS))
          dispatch(updateUserQuestion(users))
          dispatch(updateQuestionQuestion(questions))
          dispatch(setAuthedUser('sarahedo'))
          dispatch(apiEnd(GET_QUESTIONS))
        })
      }
  }

  export function updateAnswer(answer) {
    return (dispatch) => {
      dispatch (apiStart(UPDATE_ANSWER))
        return _saveQuestionAnswer(answer)  
          .then(({users,questions}) =>{
            dispatch(updateUserAnswer(users))
            dispatch(updateQuestionAnswer(questions))
            dispatch(apiEnd(UPDATE_ANSWER))
        })
      }
    }

  
    
   

  export function saveQuestion(question) {
    return (dispatch) => {
      return saveNewQuestion(question)
        .then(({questions,users}) => {
          dispatch(apiStart(UPDATE_QUESTION_ANSWER))
          dispatch(getUsers(users))
          dispatch(getQuestions(questions))
          dispatch(apiEnd(UPDATE_QUESTION_ANSWER))
        })
      }
  }

  
  export function handleInitialData(){
    return (dispatch) => {
      return getInitialData()
        .then (({users, questions})=> {
          dispatch(apiStart(APP_INIT))
          dispatch(getUsers(users))
          dispatch(getQuestions(questions))
          dispatch(setAuthedUser('sarahedo'))
          dispatch(apiEnd(APP_INIT))
        })
    }
  }
  
