import React, { Component } from "react"
import axios from "axios"

import { UserListWrapper, UserInfo } from "../styles/userStyles"

class UsersList extends Component {
  state = {
    users: [],
    message: ""
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token")
    if (!token) this.props.history.push("/signup")
    axios
      .get("http://localhost:8080/api/users", {
        headers: { Authorization: token }
      })
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(error => {
        const message =
          error.response.data.errorMessage || "Something went wrong!"
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

export default UsersList
