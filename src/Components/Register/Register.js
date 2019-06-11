import React from 'react'
import config from '../../config'

export default class Register extends React.Component {

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { register_full_name, register_user_name, register_email, register_password } = ev.target

    this.setState({ error: null })
    debugger
    fetch(`${config.API_ENDPOINT}/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        full_name: register_full_name.value,
        user_name: register_user_name.value,
        email: register_email.value,
        password: register_password.value,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(user => {
        register_full_name.value = ''
        register_user_name.value = ''
        register_password.value = ''
        this.props.history.push('/login')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
  return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='fullname'>
            <label htmlFor='register-fullname'>
              Full Name
            </label>
            <input name='register_full_name' type='text' id='register_fullname' placeholder='Full Name' required/>
          </div>
          <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name
          </label>
          <input name='register_user_name' type='text' id='register_user_name' placeholder='User Name' required/>
        </div>
          <div className='email'>
            <label htmlFor='register_email'>
            email
            </label>
            <input name='register_email' type='text' id='register_email' placeholder='email' required/>
          </div>
          <div className='password'>
            <label htmlFor='register_password'>
              Password
            </label>
            <input name='register_password' type='password' id='register_password' placeholder='Password' required/>
          </div>
          <button type='submit'>
            Register
          </button>
        </form>
      </div>
    );
  }
}
