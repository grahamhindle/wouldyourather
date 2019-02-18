import React from 'react'
import { connect } from 'react-redux'
import MainMenu from '../components/MainMenu'
import AppBarControl from '../components/AppBarContol'
import { getLoggedOnUser } from '../selectors/scorecard';

const MainMenuContainer = props => <div><MainMenu {...props} /><AppBarControl {...props}/></div>

const mapStateToProps = (state,props)=> {
  return {
  loggedOn: getLoggedOnUser(state),
  user: state.users[state.authedUser]
  }
}
export default connect(
  mapStateToProps,
)(MainMenuContainer);