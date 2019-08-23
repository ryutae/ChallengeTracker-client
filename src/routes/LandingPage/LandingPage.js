import React from 'react'
import './LandingPage.css'
import LinkButton from './LinkButton'

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
    }
  }

  render() {
    return (
      <div className='landing_page'>
        <div className='landing_page_text'>
          <h1>Welcome to Challenge Tracker</h1>
          <h3>Conquering challenges together and pushing each other on</h3>
          <div className='landing_page_links'>
            <LinkButton to='/register'>Register</LinkButton>
            <LinkButton to='/login'>Login</LinkButton>
          </div>
        </div>
      </div>
      );
  }
}
