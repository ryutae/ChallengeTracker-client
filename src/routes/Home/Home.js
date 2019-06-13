import React from 'react'
import { Link } from 'react-router-dom'
import GroupsList from '../../Components/Groups/GroupsList'

export default class Home extends React.Component {
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
        <Link to='/create-group'>
          Create Group
        </Link>
        <GroupsList />
      </div>
      );
  }
}
