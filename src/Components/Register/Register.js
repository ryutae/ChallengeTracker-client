import React from 'react'
import config from '../../config'
import loginImg from '../../assets/login.png'
import './Register.css'

export default class Register extends React.Component {

  state = {
      error: null,
      errorUsername: null
  }

  validate = (username) => {
    let result = true

    if(username.length < 3) {
        this.setState({errorUsername: "Username is too short"})
        result = false
    }

    if(!username) {
        this.setState({errorUsername: "Username is required"})
        result = false
    }

    return result
  }

  refreshError = () => {
      this.setState({errorUsername: null})
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { register_full_name, register_user_name, register_email, register_password } = ev.target
    if(!this.validate(register_user_name.value)) {
        return
    }

    this.setState({ error: null })
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
    const { error } = this.state
    return (
      <div className="register-page">
        <h1 className="title">Register</h1>
        <img src={loginImg} alt=""/>

        <form onSubmit={this.handleSubmit}>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='fullname'>
            <input name='register_full_name' type='text' id='register_fullname' placeholder='Full Name'/>
          </div>
          <div className='user_name'>
          <input name='register_user_name' type='text' id='register_user_name' onFocus={this.refreshError} placeholder='User Name' className={ this.state.errorUsername ? 'input-error' : 'none' }/>
          {
              this.state.errorUsername && <p className="form-error">{this.state.errorUsername}</p>
          }
        </div>
          <div className='email'>
            <input name='register_email' type='text' id='register_email' placeholder='email'/>
          </div>
          <div className='password'>
            <input name='register_password' type='password' id='register_password' placeholder='Password'/>
          </div>
          <button type='submit'>
            Register
          </button>
        </form>
      </div>
    );
  }
}
