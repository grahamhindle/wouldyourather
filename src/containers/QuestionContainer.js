import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Question from '../components/Question'
import { getAnswerText ,selectAuthor} from '../selectors/question'
import { updateAnswer } from '../actions'


const QuestionContainer = props => <Question {...props} />



const mapStateToProps = (state,props) => {
  
  return {
  questions: _.shuffle(_.values(state.questions)),
  users:    state.users,
  authedUser: state.authedUser,
  answer: getAnswerText(state,props),
  author: selectAuthor(state, props.question)
  }
  
}

export default connect(
  mapStateToProps,
  {updateAnswer},
)(QuestionContainer);