import React from 'react'
import { connect } from 'react-redux'
import MainMenu from '../components/MainMenu'
import { getLoggedOnUser } from '../selectors/scorecard';

const MainMenuContainer = props => <MainMenu {...props} />

const mapStateToProps = (state,props)=> {
  return {
  loggedOn: getLoggedOnUser(state)
  }
}
export default connect(
  mapStateToProps,
)(MainMenuContainer);