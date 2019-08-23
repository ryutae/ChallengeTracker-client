import React from 'react'
import { Link } from 'react-router-dom'
import GroupsList from '../../Components/Groups/GroupsList'
import '../../Components/Groups/GroupList.css'
import './HomePage.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
    }
  }

  render() {
    return (
      <div className='home_page'>
        <GroupsList />
        <Link to='/create-group' className='create-group-button'>
          Create Group
        </Link>
      </div>
      );
  }
}
