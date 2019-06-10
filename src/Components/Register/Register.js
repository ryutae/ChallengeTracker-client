import React from 'react'
import config from '../../config'

export default class Register extends React.Component {
  render() {
  return (
      <div>
        <h1>Register</h1>
        <form>
          <div className='fullname'>
            <label htmlFor='register-fullname'>
              Full Name
            </label>
            <input name='register-fullname' id='register-fullname' placeholder='Full Name' />
          </div>
          <div className='username'>
            <label htmlFor='register-username'>
              User Name
            </label>
            <input name='register-username' id='register-username' placeholder='User Name' />
          </div>
          <div className='email'>
            <label htmlFor='register-email'>
            email
            </label>
            <input name='register-email' id='register-email' placeholder='email' />
          </div>
          <div className='password'>
            <label htmlFor='register-password'>
              Password
            </label>
            <input name='register-password' id='register-password' placeholder='Password' />
          </div>
          <button type='submit'>
            Register
          </button>
        </form>
      </div>
    );
  }
}
