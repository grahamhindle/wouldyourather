import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import users  from './users'
import  authedUser  from './autheduser'
import questions from './questions'
import isLoading from './isLoading'



const rootReducer =  combineReducers({
  users,
  authedUser,
  questions,
  isLoading,

})

const persistConfig = {
  key: 'wouldyou',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
