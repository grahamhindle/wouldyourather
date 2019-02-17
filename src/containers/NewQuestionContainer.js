import React from 'react'
import { connect } from 'react-redux'
import NewQuestion from '../components/NewQuestion'
import { saveNewQuestion } from '../actions'

const NewQuestionContainer = props => <NewQuestion {...props} />

const mapStateToProps = ({authedUser})=> {
  return {
    author:authedUser,
  }
}
export default connect(
  mapStateToProps,
  { saveNewQuestion },
)(NewQuestionContainer);