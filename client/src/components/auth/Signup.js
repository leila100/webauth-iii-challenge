import React, { Component } from "react"
import { Link } from "react-router-dom"

import { FormWrapper, FormGroup, Button, Footer } from "../../styles/formStyles"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      department: ""
    }
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  registerHandler = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.registerHandler}>
          <FormGroup>
            <i className='fas fa-envelope' />
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={this.state.email}
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
            Already registered: <Link to='/login'>Login</Link>
          </Footer>
        </form>
      </FormWrapper>
    )
  }
}

export default Signup
