import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'
import {Link} from 'react-router-dom'
import { getAuthedUser,setAuthedUser } from '../actions/authedUserActions'

const LoginContainer = props => {

  return (

  <Link to={'/questions'} style={{color:'#FFFFFF',textDecoration: 'none'}}><Login { ...props} /></Link>
  )
}


  

const mapStateToProps = (state,props)=> {
  return {
    users: Object.values(state.users)
  }
}
export default connect(
  mapStateToProps,
  {setAuthedUser, getAuthedUser},

)(LoginContainer);