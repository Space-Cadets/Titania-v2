// @flow

import { browserHistory } from 'react-router'
import SharedConstants from '../constants/SharedConstants.js'

export const navigateToLogin = () => {
  browserHistory.push('/login')
  return {
    type: SharedConstants.NAVIGATE_TO_LOGIN,
  }
}

export const navigateToSignup = () => {
  browserHistory.push('/signup')
  return {
    type: SharedConstants.NAVIGATE_TO_SIGNUP,
  }
}

export const navigateToDashboard = () => {
  browserHistory.push('/dashboard')
  return {
    type: SharedConstants.NAVIGATE_TO_DASHBOARD,
  }
}
