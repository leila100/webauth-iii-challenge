import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import { Message } from "../../styles/commonStyles"
import { FormWrapper, FormGroup, Button, Footer } from "../../styles/formStyles"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      department: "",
      message: ""
    }
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  registerHandler = event => {
    event.preventDefault()
    const { username, password, department } = this.state
    // const endpoint = "http://localhost:8080/api/register"
    const endpoint = "https://webauth-iii-challenge.herokuapp.com/api/register"
    axios
      .post(endpoint, {
        username,
        password,
        department
      })
      .then(response => {
        localStorage.setItem("token", response.data.token)
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
        <form onSubmit={this.registerHandler}>
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
          <FormGroup>
            <i className='fas fa-building' />
            <input
              type='text'
              placeholder='Department'
              name='department'
              value={this.state.department}
              onChange={this.saveInput}
              required
            />
          </FormGroup>
          <Button type='submit'>
            <i className='fas fa-user-plus' /> Sign Up
          </Button>
          <Footer>
            Already registered: <Link to='/signin'>Sign In</Link>
          </Footer>
        </form>
      </FormWrapper>
    )
  }
}

export default Signup
