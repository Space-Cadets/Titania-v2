// @flow
import { connect } from 'react-redux'
import LoginForm from '../components/login/LoginForm.react.js'
import { loginUser } from '../actions/LoginActions.js'
import { navigateToSignup } from '../actions/SharedActions.js'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Function) => ({
  loginSubmit: (
    email: string,
    password: string,
  ) => {
    dispatch(loginUser(email, password))
  },
  navigateToSignup: () => {
    dispatch(navigateToSignup())
  },
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
