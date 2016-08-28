// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import LoginConstants from '../constants/LoginConstants.js'
import SearchConstants from '../constants/SearchConstants.js'

const appInitialState = {
}

const loginInitialState = {
  authToken: null,
}

const signupInitialState = {
}

const coursesInitialState = {
  query: '',
  courses: [],
  fetching: false,
}

const teachersInitialState = {
  query: '',
  teachers: [],
  fetching: false,
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

const searchCourses = (state: Object = coursesInitialState, action: Object) => {
  switch (action.type) {
    case SearchConstants.REQUEST_COURSES:
      return {
        ...state,
        query: action.query,
        fetching: true,
      }
    case SearchConstants.RECEIVE_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.courses,
        fetching: false,
      }
    case SearchConstants.RECEIVE_COURSES_FAILURE:
      // TODO (kentkwu) add error handling for search courses action
      // falls through
    default:
      return state
  }
}

const searchTeachers = (state: Object = teachersInitialState, action: Object) => {
  switch (action.type) {
    case SearchConstants.REQUEST_TEACHERS:
      return {
        ...state,
        query: action.query,
        fetching: true,
      }
    case SearchConstants.RECEIVE_TEACHERS_SUCCESS:
      return {
        ...state,
        teachers: action.teachers,
        fetching: false,
      }
    case SearchConstants.RECEIVE_TEACHERS_FAILURE:
      // TODO (kentkwu) add error handling for search teachers action
      // falls through
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  appState,
  signUp,
  login,
  searchCourses,
  searchTeachers,
})

export default rootReducer
