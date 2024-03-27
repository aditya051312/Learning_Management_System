import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Here we should validate the credentials with the backend
    // If credentials are valid, we redirect to the Dashboard
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' onChange={this.handleInputChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default withRouter(LoginPage);