import React, { Component } from "react"
import { Route } from "react-router-dom"

import Home from "./components/Home"
import Signup from "./components/auth/Signup"

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={Signup} />
      </div>
    )
  }
}

export default App
