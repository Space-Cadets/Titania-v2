// @flow
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store/Store.js'
import Signup from './components/signup/Signup.react.js'

injectTapEventPlugin()

const App = (): Object => (
  <Provider store={store}>
    <MuiThemeProvider theme={getMuiTheme()}>
      <Router history={browserHistory}>
        <Route path="/" component={Signup} />
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default App
