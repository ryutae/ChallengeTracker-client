import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default class Header extends React.Component {
  render() {
  return (
    <header>
      <Link to='/home'>
        <h1>Challenge Tracker</h1>
      </Link>
      <nav className='navbar'>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}
}
