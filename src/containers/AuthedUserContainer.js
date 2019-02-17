import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import AuthedUser from '../components/AuthedUser'
import { getAuthedUser,setAuthedUser } from '../actions/authedUserActions'


const AuthedUserContainer = props => <AuthedUser {...props} />

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  users: _.shuffle(_.values(state.users))
})

export default connect(
  mapStateToProps,
  { getAuthedUser ,
    setAuthedUser
  },
)(AuthedUserContainer);