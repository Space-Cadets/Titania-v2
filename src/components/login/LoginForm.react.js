// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm } from 'redux-form'

const LoginForm = (props: Object) => {
  const {
    fields: {
      email,
      password,
    },
    loginSubmit,
    navigateToSignup,
  }: {
    fields: Object,
    loginSubmit: Function,
    navigateToSignup: Function,
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
      <h2 id={'formText'}>Log In</h2>
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
          label="Log In"
          primary={true}
          onClick={() => {
            loginSubmit(
              email.value,
              password.value,
            ) }
          }
        />
        <RaisedButton
          className="formButton"
          label="Sign Up"
          onClick={() => {
            navigateToSignup()
          }}
        />
      </span>

    </Paper>
  )
}

export default reduxForm({
  form: 'Login',
  fields: ['email', 'password'],
})(LoginForm)
