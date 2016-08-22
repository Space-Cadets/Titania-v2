import React from 'react'
import Header from '../shared/Header.react.js'
import SignupContainer from '../../containers/SignupContainer.react.js'

const Signup = () => (
  <div>
    <Header />
    <div className={'contentContainer'}>
      <SignupContainer />
    </div>
  </div>
)

export default Signup
