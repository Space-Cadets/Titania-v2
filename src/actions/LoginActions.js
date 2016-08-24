// @flow
import request from 'superagent'
import LoginConstants from '../constants/LoginConstants.js'
import { navigateToDashboard } from '../actions/SharedActions.js'

export const loginSuccess = (token: string) => ({
  type: LoginConstants.LOGIN_USER_SUCCESS,
  success: true,
  description: 'Login Successful',
  authToken: token,
})

export const loginFailure = () => ({
  type: LoginConstants.LOGIN_USER_FAIL,
  success: false,
  description: 'Login Failed',
})

export const loginUser = (
  username: string,
  password: string
) => (dispatch: Function) => {
  if (localStorage.authToken) {
    return dispatch(loginSuccess(localStorage.authToken))
  }
  request.post('http://localhost:5000/auth')
    .send({
      username,
      password,
    })
    .end((err: Object, res: Object) => {
      if (res.statusCode === 200) {
        const token = `JWT ${res.body.access_token}`
        localStorage.setItem('authToken', token)
        dispatch(loginSuccess(token))
        return dispatch(navigateToDashboard())
      }
      return dispatch(loginFailure())
    })
  return null
}
