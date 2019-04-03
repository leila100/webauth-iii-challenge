import React, { Component } from "react"
import axios from "axios"

import { UserListWrapper, UserInfo } from "../styles/userStyles"
import { Button } from "../styles/formStyles"

class UsersList extends Component {
  state = {
    users: [],
    message: ""
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token")
    if (!token) this.props.history.push("/signup")
    // const endpoint = "http://localhost:8080/api/users"
    const endpoint = "https://webauth-iii-challenge.herokuapp.com/api/users"

    axios
      .get(endpoint, {
        headers: { Authorization: token }
      })
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(error => {
        let message = "Something went wrong!"
        if (error.response) message = error.response.data.errorMessage
        console.log(message)
        this.setState({ message: message })
      })
  }

  logoutHandler = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.history.push("/signin")
  }

  render() {
    return (
      <UserListWrapper>
        <h1>Welcome to Webauth-iii-challenge</h1>
        <ul>
          {this.state.users.map(user => {
            return (
              <UserInfo key={user.id}>
                <div>
                  <i className='fas fa-user' /> <span>Username:</span>
                  {user.username}
                </div>
                <div>
                  <i className='fas fa-building' /> <span>Department:</span>
                  {user.department}
                </div>
              </UserInfo>
            )
          })}
        </ul>
        <Button danger onClick={this.logoutHandler}>
          Sign Out
        </Button>
      </UserListWrapper>
    )
  }
}

export default UsersList
