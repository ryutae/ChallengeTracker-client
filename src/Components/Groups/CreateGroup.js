import React from 'react'
import './CreateGroup.css'
import config from '../../config'

//admin user only
export default class CreateGroup extends React.Component {
  handlehandleCreateGroup(e) {
    e.preventDefault()
    const that = this
    fetch(`${config.API_ENDPOINT}/groups/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.group_name.value,
        description: e.target.group_description.value,
      })
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      that.props.history.push('/')
    })
    console.log('creating group')

  }
  render() {
    return (
      <form onSubmit={e => this.handleCreateGroup(e)}>
        <label htmlFor='group_name'>Name</label>
        <input name='group_name' id='group_name'/>
        <label htmlFor='group_description'>Description</label>
        <input description='group_description' id='group_description'/>
        <button>Create Group</button>
      </form>
    )
  }
}
