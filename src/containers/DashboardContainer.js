import React from 'react'
import { setAuthedUser } from '../actions/authedUserActions'
import { connect } from 'react-redux'
import Dashboard  from '../components/Dashboard'
import { sortUsersByScore } from '../selectors/scorecard';

const DashboardContainer = props => <Dashboard  {...props} />

const mapStateToProps = (state,props)=> {
  console.log('mstp',state)
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