import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Users from '../components/Users'
import { getUserData } from '../actions/userActions'
import { GET_USERS} from '../constants/actionTypes'

const UsersContainer = props => <Users {...props} />

const mapStateToProps = state => ({
  users: _.values(state.users),
  authedUser: state.authedUser,
  loading: state.isLoading[GET_USERS]
})

export default connect(
  mapStateToProps,
  { getUserData },
)(UsersContainer);