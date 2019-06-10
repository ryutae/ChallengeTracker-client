import React from 'react'
import './Login.css'
import config from '../../config'

export default class Login extends React.Component {
  render() {
  return (
    <div>
      <h1>Login</h1>
      <form className='login-form'>
        <div className='email'>
          <label htmlFor='login-email'>
          Email
          </label>
          <input name='login-email' id='login-email' placeholder='email' />
        </div>
        <div className='password'>
          <label htmlFor='login-password'>
            Password
          </label>
          <input name='login-password' id='login-password' placeholder='Password' />
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
    );
  }
}
