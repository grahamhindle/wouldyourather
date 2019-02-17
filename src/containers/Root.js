import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"
import store, { persiststore } from '../store'
import DevTools from '../containers/DevTools'
import StyledContainer from '../styled/StyledContainer'
import { GlobalStyle } from '../injectGlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'
import App from '../components/App'
import {handleInitialData} from  '../actions'
import { PersistGate} from 'redux-persist/integration/react'
import { setAuthedUser } from '../actions/authedUserActions';

 
const Root = () => {
  store.dispatch(setAuthedUser(''))
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persiststore} loading={null}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <StyledContainer>
        <Router>
          <App />
        </Router>
        <DevTools />
      </StyledContainer>
      </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
export default Root