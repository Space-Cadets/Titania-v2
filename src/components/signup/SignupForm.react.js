// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm } from 'redux-form'

const SignupForm = (props: Object) => {
  const {
    fields: {
      firstName,
      lastName,
      password,
      email,
    },
    signupSubmit,
  }: {
    fields: Object,
    signupSubmit: Function,
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
    <Paper zDepth={1} className="signupForm">
      <h2 id={'signupText'}>Signup</h2>
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
      <RaisedButton
        className="signupButton"
        label="Create Account"
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
    </Paper>
  )
}

export default reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'password', 'email'],
})(SignupForm)
