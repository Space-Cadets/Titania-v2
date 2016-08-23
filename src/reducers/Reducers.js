// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import LoginConstants from '../constants/LoginConstants.js'

const initialState = {
}

const appState = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    default:
      return state
  }
}

const signUp = (state: Object = initialState, action: Object) => {
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
})

export default rootReducer
