import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    axios.post('/api/login', { username, password })
      .then(response => {
        this.props.history.push('/dashboard');
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleError = (error) => {
    this.setState({
      error: error.message
    });
  }

  render() {
    const { username, password, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" value={username} onChange={this.handleInputChange} placeholder="Username" required />
        <input type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="Password" required />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    );
  }
}

export default withRouter(LoginPage);
