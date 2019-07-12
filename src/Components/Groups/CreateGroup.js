import React from 'react'
import './CreateGroup.css'
import config from '../../config'
import TokenService from '../../services/TokenService'

//admin user only
export default class CreateGroup extends React.Component {
  handleCreateGroup = e => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/groups/create/new`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name: e.target.group_name.value,
        description: e.target.group_description.value,
      })
    })
    .then(res => res.json())
    .then(resJson => {
      this.props.history.goBack()
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleCreateGroup}>
        <input name='group_name' id='group_name' placeholder='Name of Group'/>
        <input description='group_description' id='group_description' placeholder='Description'/>
        <button type='submit'>Create Group</button>
      </form>
    )
  }
}
