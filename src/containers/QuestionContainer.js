import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Question from '../components/Question'
import { selectAuthor, getAnswerText} from '../selectors/question'
import { updateAnswer } from '../actions'
import LoginContainer from '../containers/LoginContainer'


const QuestionContainer = props => props.authedUser ? <Question {...props} /> : <LoginContainer />



const mapStateToProps = (state,props) => {

  return {
  questions: _.shuffle(_.values(state.questions)),
  users:    state.users,
  authedUser: state.authedUser,
  author: selectAuthor(state, props.question),
  answer: getAnswerText(state,props)
  }
  
}

export default connect(
  mapStateToProps,
  {updateAnswer},
)(QuestionContainer);