import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/TokenService'
import GroupListContext from '../../contexts/GroupListContext'

export default class GroupsList extends React.Component {
  static contextType = GroupListContext

  componentDidMount() {
    this.context.clearError()
    fetch(`${config.API_ENDPOINT}/groups/all`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
    .then(this.context.setGroupList)
    .catch(this.context.setError)
    }

  renderGroups() {
    const { groupList = [] } = this.context
    return groupList.map(group =>
      <Link to={`/groups/${group.id}`}>
        <div key={group.id}>
          <span>{group.name}</span> - {group.description}
        </div>
      </Link>
    )
  }


  render() {
    const { error } = this.context
    return (
      <section className='GroupList'>
        <h3>Groups List</h3>
        {error ? <p>There was an error. Please try again</p> : this.renderGroups()}
      </section>
      )
  }
}
