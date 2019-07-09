import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/TokenService'
import UserContext from '../../contexts/UserContext'

export default class Header extends React.Component {
  static contextType = UserContext
  // state = {
  //   userLoggedIn: null
  // }

  handleLogoutClick = () => {
  TokenService.clearAuthToken()
  this.context.setUserLoggedInFalse()
  /* when logging out, clear the callbacks to the refresh api and idle auto logout */
  // TokenService.clearCallbackBeforeExpiry()
  // IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (
      <li>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </li>
    )
  }

  renderLoginLink() {
    return (
      <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </>
    )
  }

  render() {
    return (
      <header>
        <Link to='/home' className='Title'>
          <h1>Challenge Tracker</h1>
        </Link>
        <nav className='navbar'>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </ul>
        </nav>
      </header>
    )
  }
}
