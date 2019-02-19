import React from 'react'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import App  from '../components/App'
import LoginContainer from '../containers/LoginContainer'


const AppContainer = props => <App  {...props} />
  

const mapStateToProps = (state,props)=> {
  return {
    loggedOnUser: state.users[state.authedUser]
  }
}
export default connect(
  mapStateToProps,
  {handleInitialData},
)(AppContainer);