import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'
import Logoff from '../components/Logoff'
import { getAuthedUser,setAuthedUser } from '../actions/authedUserActions'

const LoginContainer = props => (props.author ?  <Login  {...props} />:<Logoff { ...props} /> )
   
  

const mapStateToProps = (state,props)=> {
  return {
    author:state.authedUser,
    users: Object.values(state.users),
    
  }
}
export default connect(
  mapStateToProps,
  {setAuthedUser, getAuthedUser},

)(LoginContainer);