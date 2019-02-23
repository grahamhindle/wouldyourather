import React from 'react'
import { setAuthedUser } from '../actions/authedUserActions'
import { connect } from 'react-redux'
import Dashboard  from '../components/Dashboard'
import { sortUsersByScore } from '../selectors/scorecard';
import LoginContainer from '../containers/LoginContainer'

const DashboardContainer = props => props.author ? <Dashboard  {...props}/> : <LoginContainer />

const mapStateToProps = (state,props)=> {
 
  return {
    author:state.authedUser,
    users: Object.values(state.users),
    scores: sortUsersByScore(state)
    

  }
}
export default connect(
  mapStateToProps,
  {setAuthedUser},
)(DashboardContainer);