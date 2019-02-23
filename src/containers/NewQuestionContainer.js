import React from 'react'
import { connect } from 'react-redux'
import NewQuestion from '../components/NewQuestion'
import { saveNewQuestion } from '../actions'
import LoginContainer from '../containers/LoginContainer'

const NewQuestionContainer = props => props.author ? <NewQuestion  {...props} /> : <LoginContainer />

const mapStateToProps = ({authedUser})=> {
  return {
    author:authedUser,
  }
}
export default connect(
  mapStateToProps,
  { saveNewQuestion },
)(NewQuestionContainer);