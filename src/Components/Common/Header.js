import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  render() {
  return (
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      <Link to='/create'>
        Create Challenge
      </Link>
    </header>
  )
}
}
