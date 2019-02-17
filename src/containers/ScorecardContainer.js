import React from 'react'
import { connect } from 'react-redux'
import Scorecard from '../components/Scorecard'
import { selectAuthor } from '../selectors/question'
import { userCount , questionCount,votesForQuestion } from '../selectors/scorecard'


const ScorecardContainer = props => <Scorecard {...props} />

const mapStateToProps = (state,props)=> {
  return {
    author: selectAuthor(state, props.question),
    userCount: userCount(state),
    questionCount: questionCount(state),
    votes: votesForQuestion(state,props.question),
    
    
  }
}
export default connect(
  mapStateToProps,
  null,
)(ScorecardContainer);