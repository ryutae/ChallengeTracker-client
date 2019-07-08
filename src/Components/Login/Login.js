import React from 'react'
import './Login.css'
import config from '../../config'
import TokenService from '../../services/TokenService'
import loginImg from '../../Assets/login.png'
import UserContext from '../../contexts/UserContext'

export default class Login extends React.Component {
  static contextType = UserContext
  state = {
    error: null
  }
  handleLogin = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { login_user_name, login_password } = e.target
    fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name: login_user_name.value,
        password: login_password.value,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        return res
      })
      .then(res => {
        login_user_name.value = ''
        login_password.value = ''
        this.context.setUserLoggedInTrue()
        this.props.history.push('/home')
      })
      .catch(res => {
        this.context.setError(res.error)
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className="login-page">
        <h1 className="title">Login</h1>
          <img src={loginImg} alt=""/>
        <form className='login_form' onSubmit={this.handleLogin}>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='user_name'>
            <input name='login_user_name' id='login_user_name' placeholder='User name' />
          </div>
          <div className='password'>
            <input name='login_password' type='password' id='login_password' placeholder='Password' />
          </div>
          <button type='submit'>
            Login
          </button>
        </form>
      </div>
      );
  }
}
