// @flow
import { connect } from 'react-redux'
import SignupForm from '../components/signup/SignupForm.react.js'
import { signupUser } from '../actions/SignupActions.js'
import { navigateToLogin } from '../actions/SharedActions.js'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Function) => ({
  signupSubmit: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    dispatch(signupUser(firstName, lastName, email, password))
  },
  navigateToLogin: () => {
    dispatch(navigateToLogin())
  },
})

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)

export default SignupContainer
