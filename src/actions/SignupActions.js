// @flow
import request from 'superagent'
import LoginConstants from '../constants/LoginConstants.js'
import { navigateToDashboard } from '../actions/SharedActions.js'

export const signupSuccess = () => ({
  type: LoginConstants.SIGNUP_SUCCESS,
  success: true,
  description: 'Check your email to validate your account',
})

export const signupFailure = () => ({
  type: LoginConstants.SIGNUP_FAILURE,
  success: false,
  description: 'Something went wrong',
})

export const signupUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => (dispatch: Function) => {
  request.post('http://localhost:5000/signup')
    .send({
      firstName,
      lastName,
      email,
      password,
    })
    .end((err: Object, res: Object) => {
      if (res.statusCode === 200) {
        dispatch(signupSuccess())
        return dispatch(navigateToDashboard())
      }
      return dispatch(signupFailure())
    })
}
