import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'
import Logoff from '../components/Logoff'
import {Link} from 'react-router-dom'
import { getAuthedUser,setAuthedUser } from '../actions/authedUserActions'

const LoginContainer = props => (<Link to={'/'}><Login { ...props} /></Link>)


  

const mapStateToProps = (state,props)=> {
  return {
    author:state.authedUser,
    users: Object.values(state.users),
    loggedonData: state.users[state.authedUser]
    
  }
}
export default connect(
  mapStateToProps,
  {setAuthedUser, getAuthedUser},

)(LoginContainer);