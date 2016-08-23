// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import LoginConstants from '../constants/LoginConstants.js'

const appInitialState = {
}

const loginInitialState = {
  authToken: null,
}

const signupInitialState = {
}

const appState = (state: Object = appInitialState, action: Object) => {
  switch (action.type) {
    default:
      return state
  }
}

const login = (state: Object = loginInitialState, action: Object) => {
  switch (action.type) {
    case LoginConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        authToken: action.authToken,
      }
    case LoginConstants.LOGIN_USER_FAIL:
    default:
      return state
  }
}

const signUp = (state: Object = signupInitialState, action: Object) => {
  switch (action.type) {
    case LoginConstants.SIGNUP_SUCCESS:
      return {
        ...state,
      }
    case LoginConstants.SIGNUP_FAILURE:
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  appState,
  signUp,
  login,
})

export default rootReducer
