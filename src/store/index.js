import configureStore from './configureStore'
import { handleInitialData } from '../actions'

const {store, persiststore } = configureStore()
store.dispatch(handleInitialData())
export {persiststore, store as default}