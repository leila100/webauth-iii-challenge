import React, { Component } from "react"
import { Route, Redirect, Switch, NavLink } from "react-router-dom"
import { withRouter } from "react-router-dom"

import Signup from "./components/auth/Signup"
import Signin from "./components/auth/Signin"
import UsersList from "./components/UsersList"
import { NavbarWrapper } from "./styles/navbarStyles"

require("dotenv").config()

class App extends Component {
  logoutHandler = event => {
    event.preventDefault()
    localStorage.removeItem("jwt")
    this.props.history.push("/signin")
  }

  render() {
    return (
      <div>
        <header>
          <NavbarWrapper>
            <NavLink to='/users'>Users</NavLink>
            {localStorage.getItem("jwt") ? (
              <button onClick={this.logoutHandler}>Logout</button>
            ) : (
              <>
                <NavLink to='/signup'>Sign Up</NavLink>
                <NavLink to='/signin'>Sign In</NavLink>
              </>
            )}
          </NavbarWrapper>
        </header>
        <main>
          <Switch>
            <Route path='/users' component={UsersList} />
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Redirect exact from='/' to='/users' />
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App)
