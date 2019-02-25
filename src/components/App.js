import React from 'react'
import { Route, } from 'react-router-dom'
import StyledHomeContainer from '../styled/StyledHomeContainer'
import QuestionsContainer from '../containers/QuestionsContainer'
import LoginContainer from '../containers/LoginContainer'
import NewQuestionContainer from '../containers/NewQuestionContainer'
import DashboardContainer from '../containers/DashboardContainer'
import MainMenuContainer from '../containers/MainMenuContainer'
import Startup from '../components/Startup'



const App = (props) => {
  
  return (
  <StyledHomeContainer >
    <Route exact path = '/profile' component={LoginContainer} />
    <Route exact path = '/questions' component={QuestionsContainer } />
    <Route exact path = '/' component={Startup} />
    <Route exact path = '/add' component={NewQuestionContainer} />
    <Route exact path = '/leaderboard' component={DashboardContainer} />
    <MainMenuContainer />
  </StyledHomeContainer>
  )
}
export default App