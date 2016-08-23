// @flow
import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store/Store.js'
import Signup from './components/signup/Signup.react.js'
import Login from './components/login/Login.react.js'
import Dashboard from './components/dashboard/Dashboard.react.js'
import { loginSuccess } from './actions/LoginActions.js'

injectTapEventPlugin()

const getRoutes = (reduxStore: Object) => {
  const authRequired = (nextState: Function, replace: Function) => {
    const state = reduxStore.getState()

    if (localStorage.authToken) {
      reduxStore.dispatch(loginSuccess(localStorage.authToken))
    }

    if (!state.login.authToken && !localStorage.authToken) {
      replace('/login')
    }
  }

  return (
    <Route path="/">
      <IndexRoute component={Dashboard} onEnter={authRequired} />
      <Route path="signup" component={Signup} />
      <Route path="login" component={Login} />
      <Route path="dashboard" component={Dashboard} onEnter={authRequired} />
    </Route>
  )
}

const App = (): Object => (
  <Provider store={store}>
    <MuiThemeProvider theme={getMuiTheme()}>
      <Router history={browserHistory}>
        { getRoutes(store) }
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default App
