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
    axios
      .post("http://localhost:8080/api/register", {
        username,
        password,
        department
      })
      .then(response => {
        localStorage.setItem("token", response.data.token)
        this.props.history.push("/")
      })
      .catch(error => {
        const message =
          error.response.data.errorMessage || "Something went wrong!"
        this.setState({ message: message })
      })
  }

  render() {
    return (
      <FormWrapper>
        <Message error>{this.state.message}</Message>
        <form onSubmit={this.registerHandler}>
          <FormGroup>
            <i className='fas fa-envelope' />
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
