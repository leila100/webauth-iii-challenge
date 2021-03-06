import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import { Message } from "../../styles/commonStyles"
import { FormWrapper, FormGroup, Button, Footer } from "../../styles/formStyles"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      message: ""
    }
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginHandler = event => {
    event.preventDefault()
    const { username, password } = this.state
    // const endpoint = "http://localhost:8080/api/login"
    const endpoint = `${process.env.REACT_APP_API_URL}/api/login`

    axios
      .post(endpoint, {
        username,
        password
      })
      .then(response => {
        localStorage.setItem("jwt", response.data.token)
        this.props.history.push("/users")
      })
      .catch(error => {
        let message = "Something went wrong!"
        if (error.response) message = error.response.data.errorMessage
        this.setState({ message: message })
      })
  }

  render() {
    return (
      <FormWrapper>
        <Message error>{this.state.message}</Message>
        <form onSubmit={this.loginHandler}>
          <FormGroup>
            <i className='fas fa-user' />
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={this.state.username}
              onChange={this.saveInput}
              required
            />
          </FormGroup>
          <FormGroup>
            <i className='fas fa-lock' />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.saveInput}
              required
            />
          </FormGroup>

          <Button type='submit'>
            <i className='fas fa-sign-in-alt' /> Sign In
          </Button>
          <Footer>
            Have to register? <Link to='/signup'>Sign Up</Link>
          </Footer>
        </form>
      </FormWrapper>
    )
  }
}

export default Signup
