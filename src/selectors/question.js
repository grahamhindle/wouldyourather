import { createSelector } from 'reselect'



const getAnswers = state => (state.users[state.authedUser].answers)
const getAuthor = state => (state.users)

export const selectAuthor = createSelector(
  [getAuthor,(state,question) => question],
  (user,question) => {
   
    return user[question.author]
  }
)

export const getAnswerText = createSelector(
  [getAnswers,(state,props) => props],
  (answers,props) => {
    const obj = Object.keys(answers).find(key => key === props.question.id)
    
    if ( typeof obj !== 'undefined'){
      console.log('obj',obj)
      return answers[obj]
    }
  }
)


export const getSelectedQuestion = (answered,id) => createSelector(
  [getAnswers],
  (answers,answered,id) => {
    if ( !answers)
    return
    const x = answers.filter(key => key = id)
  switch ( answered) {
    case 0:
    return x
    case 1:
      return x
    default:
      break;

  }
  }
)

