import React, { Component } from "react"
import axios from "axios"

import requireAuth from "../hoc/requireAuth"

import { UserListWrapper, UserInfo } from "../styles/userStyles"

class UsersList extends Component {
  state = {
    users: [],
    message: ""
  }

  componentDidMount = () => {
    // const endpoint = "http://localhost:8080/api/users"
    // const endpoint = "https://webauth-iii-challenge.herokuapp.com/api/users"

    axios
      .get("/users")
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
      </UserListWrapper>
    )
  }
}

export default requireAuth(UsersList)
