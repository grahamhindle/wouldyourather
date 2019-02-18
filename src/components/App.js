import React from 'react'
import { Route } from 'react-router-dom'
import StyledHomeContainer from '../styled/StyledHomeContainer'
import QuestionsContainer from '../containers/QuestionsContainer'
import LoginContainer from '../containers/LoginContainer'
import NewQuestionContainer from '../containers/NewQuestionContainer'
import DashboardContainer from '../containers/DashboardContainer'
import MainMenuContainer from '../containers/MainMenuContainer'
import AppBarControl from './AppBarContol'
import Startup from '../components/Startup'

const App = (props) => {
  console.log('app',props)
  return (
   
  <StyledHomeContainer >
    
 
    <Route exact path = '/' component={QuestionsContainer} />
    <Route exact path = '/newq' component={NewQuestionContainer} />
    <Route exact path = '/score' component={DashboardContainer} />
    <Route exact path = '/profile'component={LoginContainer} />
    <Route exact path = '/startup' component={Startup } />
    <MainMenuContainer />
   
  </StyledHomeContainer>
  
  
  )
}
export default App