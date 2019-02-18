import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Users from '../components/Users'
import { getUserData } from '../actions/userActions'
import { GET_USERS} from '../constants/actionTypes'
import Startup from '../components/startup'

const UsersContainer = props => props.authedUser ? <Users {...props} /> : <Startup />

const mapStateToProps = state => ({
  users: _.values(state.users),
  authedUser: state.authedUser,
  loading: state.isLoading[GET_USERS]
})

export default connect(
  mapStateToProps,
  { getUserData },
)(UsersContainer);