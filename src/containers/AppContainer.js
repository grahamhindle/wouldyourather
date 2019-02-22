import React from 'react'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import App  from '../components/App'
import LoginContainer from '../containers/LoginContainer'
import {Link} from 'react-router-dom'



const AppContainer = props =>  props.loggedOnUser ? <App  {...props} /> : <LoginContainer />
  

const mapStateToProps = (state,props)=> {
  console.log(state.authedUser)
  return {
    loggedOnUser:  state.authedUser  ? state.users[state.authedUser]:null
    
  }
}
export default connect(
  mapStateToProps,
  {handleInitialData},
)(AppContainer);