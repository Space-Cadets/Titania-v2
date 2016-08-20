import { createStore, combineReducers } from 'redux'
import rootReducer from '../reducers/Reducers.js'

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
