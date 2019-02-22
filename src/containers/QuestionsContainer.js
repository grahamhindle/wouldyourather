import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Questions from '../components/Questions'
import { getQuestionData } from '../actions/questionActions'
import {GET_QUESTIONS } from '../constants/actionTypes'

const QuestionsContainer = props => <Questions {...props} />

const mapStateToProps = ({questions,users,isLoading}) => ({
  questions: _.shuffle(_.values(questions)),
  users ,
  loading: isLoading[GET_QUESTIONS]
})

export default connect(
  mapStateToProps,
  { getQuestionData },
)(QuestionsContainer);