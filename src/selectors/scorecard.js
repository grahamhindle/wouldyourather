import { createSelector } from 'reselect'

import _ from 'lodash'




const getUsers = state => (state.users)
const getQuestions = state => (state.questions)
const getAuthedUser=state => (state.authedUser)


export const userCount = createSelector(
  getUsers,
  (user) => {
    return Object.keys(user).length;
  }
)

export const questionCount = createSelector(
  getQuestions,
  (questions) => {
    return Object.keys(questions).length;
  }
)

// get the questioncoount
export const votesForQuestion = createSelector(
  getAuthedUser,(state,props)=> props,
  (user,props) => {
    const opt1 = Object.keys(props.optionOne.votes).length
    const opt2 = Object.keys(props.optionTwo.votes).length
    const opt1percent = calcPercent(opt1, opt2).toFixed(2)
    const opt2percent =  calcPercent(opt2, opt1).toFixed(2) 
    //did you vote for it

    const match1 = _.find(props.optionOne.votes, key => key === user)

    console.log(match1)
    return {opt1,opt2, opt1percent,opt2percent,match1}
  }
)

export const youVoted =createSelector(
  [getAuthedUser,(state,question) => question],
  (user,question) => {
    // test to see if we ansswered this question
    const match = _.find(user,key => key.answers === user)
    return match
  }
  
)
export const calcPercent = ( num,denom) =>{
  if ( denom >= 1 && num >=1) {
    return (num/(num+denom)) * 100
  }  else if (denom === 0 && num > 0){
      return 100
  }
  else
    return 0
}
export const votes = createSelector(
  getQuestions,
  (questions) => {
   
    return Object.keys(questions).length;
  }
)

export const sortUsersByScore = createSelector(
  getUsers,
  (users) =>{
    console.log('subs', users)
    const obj = Object.values(users)
    console.log('before',obj)
    obj.sort((a,b)  => 
      (Object.keys(a.answers).length + a.questions.length) < 
      (Object.keys(b.answers).length + b.questions.length) ? 1 : -1
    )
    return obj
  })

  export const getLoggedOnUser = createSelector(
    [getAuthedUser],
    (user)=> {
      if ( user )
        return user
    }
  )
  







