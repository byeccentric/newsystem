import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { config as ftpsConfig, reducer as ftpsReducer } from './pages/ftps'
import session from './store/reducers/session'

import PrivateRoute from './helpers/router'

console.log(ftpsConfig, ftpsReducer)

const reducers = combineReducers({
  [ftpsConfig.pageName]: ftpsReducer,
  session,
})

const store = createStore(reducers, applyMiddleware(thunk, createLogger()))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
