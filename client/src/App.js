import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom"

import Signup from "./components/auth/Signup"
import Signin from "./components/auth/Signin"
import UsersList from "./components/UsersList"

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/users' component={UsersList} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Redirect exact from='/' to='/users' />
        </Switch>
      </div>
    )
  }
}

export default App
