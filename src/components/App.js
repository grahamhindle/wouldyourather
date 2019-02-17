import React from 'react'
import { Route } from 'react-router-dom'
import StyledHomeContainer from '../styled/StyledHomeContainer'
import QuestionsContainer from '../containers/QuestionsContainer'
import LoginContainer from '../containers/LoginContainer'
import NewQuestionContainer from '../containers/NewQuestionContainer'
import DashboardContainer from '../containers/DashboardContainer'
import MainMenuContainer from '../containers/MainMenuContainer'
import AppBarControl from './AppBarContol'

const App = () => {
  return (
   
  <StyledHomeContainer >
 <AppBarControl />
 
    <Route exact path = '/' component={QuestionsContainer} />
    <Route exact path = '/newq' component={NewQuestionContainer} />
    <Route exact path = '/score' component={DashboardContainer} />
    <Route exact path = '/profile'component={LoginContainer} />
    <MainMenuContainer />
   
  </StyledHomeContainer>
  
  
  )
}
export default App