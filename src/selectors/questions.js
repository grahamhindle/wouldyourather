import { createSelector } from 'reselect'
import _ from 'lodash'


const questions = (state) => state.questions
const user =(state) => state.users[state.authedUser].answers

export const getQuestionsByUser = (state,flag) => {
    //filter the questions
    const result = _.differenceWith(state.questions.id,state.users[state.authedUser].answers)
    


}

export function getAnsweredQuestions(answers,id) {
   
    const x = Object.keys(answers)
    const y = x.filter(key => key === id) 
    if ( y.length >0 )
    return true
  }
