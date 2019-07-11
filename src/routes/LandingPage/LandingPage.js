import React from 'react'
import {Link} from 'react-router-dom'
export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
    }
  }

  render() {
    // TODO: Edit Profile info
    // TODO: Admin menu
    return (
      <div>
        <h1>Welcome to Challenge Tracker</h1>
        <h3>A Simple, competitive way to fight your laziness!</h3>
        <h3>
          <Link to='/register'>
            Register a user
          </Link> and
          <Link to='/login'>
             <span> login</span>
          </Link>
        </h3>
        <Link to='/home'>
          <h3>Join or create a group</h3>
        </Link>
        <div>
          <h3>Track your challenges!</h3>
        </div>
        <h4>Compare your progress against others</h4>
      </div>
      );
  }
}
