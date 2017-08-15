import React from 'react';
import * as util from '../../lib/util.js'

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameError: null,
      email: '',
      password: '',
      error: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value})
    if(name === 'username' && value === '')
      this.setState({error: new Error('username cannot be empty')})
    else this.setState({usernameError: null})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
    .then(() => {
      this.setState({username: '', email: '', password: ''});
    })
    .catch(error => {
      this.setState({error})
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='auth-form'>

        {util.renderIf(this.props.auth === 'signup',
          <input
          type='text'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleChange}
          /> )}

          <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
          />
          <input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
          />

        <button type='submit'>{this.props.auth}</button>

      </form>
    )
  }
}

export default AuthForm;
