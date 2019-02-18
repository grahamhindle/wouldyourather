import React from 'react'
import { setAuthedUser } from '../actions/authedUserActions'
import { connect } from 'react-redux'
import App  from '../components/Dashboard'


const AppContainer = props => <App  {...props} />

const mapStateToProps = (state,props)=> {
  return {
    loggedOnUser: state.users[state.authedUser]
  }
}
export default connect(
  mapStateToProps,
  {setAuthedUser},
)(AppContainer);