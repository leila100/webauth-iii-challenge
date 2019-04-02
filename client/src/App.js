import React, { Component } from "react"
import { Route } from "react-router-dom"

import Signup from "./components/auth/Signup"
import Signin from "./components/auth/Signin"
import UsersList from "./components/UsersList"

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/users' component={UsersList} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
      </div>
    )
  }
}

export default App
