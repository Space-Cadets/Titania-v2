// @flow
import React from 'react'
import { reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const SignupForm = (props: Object) => {
  const {
    fields: {
      firstName,
      lastName,
      password,
      email,
    },
    signupSubmit,
    navigateToLogin,
  }: {
    fields: Object,
    signupSubmit: Function,
    navigateToLogin: Function,
  } = props

  /* eslint-disable */
  const domOnlyProps = ({
    initialValue,
    autofill,
    onUpdate,
    valid,
    invalid,
    dirty,
    pristine,
    active,
    touched,
    visited,
    autofilled,
  ...domProps }) => domProps;

  /* eslint-enable */
  return (
    <Paper zDepth={1} className="form">
      <h2 id={'signupText'}>Sign Up</h2>
      <TextField
        {...domOnlyProps(firstName)}
        floatingLabelText="First Name"
        fullWidth={true}
      />
      <TextField
        {...domOnlyProps(lastName)}
        floatingLabelText="Last Name"
        fullWidth={true}
      />
      <TextField
        {...domOnlyProps(email)}
        floatingLabelText="Email"
        fullWidth={true}
      />
      <TextField
        {...domOnlyProps(password)}
        floatingLabelText="Password"
        type="password"
        fullWidth={true}
      />
      <span>
        <RaisedButton
          className="formButton"
          label="Sign Up"
          primary={true}
          onClick={() => {
            signupSubmit(
              firstName.value,
              lastName.value,
              email.value,
              password.value,
            ) }
          }
        />
        <RaisedButton
          className="formButton"
          label="Log In"
          onClick={() => {
            navigateToLogin()
          }}
        />
      </span>
    </Paper>
  )
}

export default reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'password', 'email'],
})(SignupForm)
