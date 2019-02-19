import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'
import {Link} from 'react-router-dom'
import { getAuthedUser,setAuthedUser } from '../actions/authedUserActions'

const LoginContainer = props => (<Link to={'/'} style={{color:'#FFFFFF',textDecoration: 'none'}}><Login { ...props} /></Link>)


  

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