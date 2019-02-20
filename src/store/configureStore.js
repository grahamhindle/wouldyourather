import { createStore, applyMiddleware, compose  } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import DevTools from '../containers/DevTools'
import thunk from 'redux-thunk'


const configureStore = initialState => {
  const store = createStore(
      rootReducer, 
      initialState,
      compose(
        applyMiddleware( thunk,logger ),
        DevTools.instrument()
      )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
  }) 
  const persiststore = persistStore(store)
      return { store, persiststore }
      
  }
}
export default configureStore

