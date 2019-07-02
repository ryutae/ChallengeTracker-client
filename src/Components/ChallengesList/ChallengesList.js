import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/TokenService'
import GroupPageContext from '../../contexts/GroupPageContext'

export default class ChallengesList extends React.Component {
  static contextType = GroupPageContext

  // static defaultProps = {
  //   challenges: [],
  // }
  //
  state = {
    user: [],
    error: ''
  }

  handleJoinGroup = () => {
    // e.preventDefault()
    this.setState({ error: null })

    const { group_id } = this.props
    fetch(`${config.API_ENDPOINT}/groups/join/${group_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res =>
      (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
    .then(res =>
      this.renderJoinedGroup()
    )
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  renderJoinGroupButton() {
    return (
      <button onClick={this.handleJoinGroup}>
        Join Group
      </button>
    )
  }

  // componentDidMount() {
  //   const { group_id } = this.props
  //   this.setState({ error: ''})
  //   fetch(`${config.API_ENDPOINT}/user/group/${group_id}`, {
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`,
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(resJson =>
  //     this.setState({
  //       user: resJson
  //     })
  //   )
  //   .catch(res => {
  //     this.setState({ error: res.error })
  //   })
  // }

  renderUserPoints() {
    return (
      <p>Current Points: {this.context.user.points}</p>
    )
  }

  renderCreateChallenge() {
    const { group_id } = this.context.group.id
    return (
      <Link to={{
        pathname: '/create-challenge',
        state: {
          group_id: group_id
        }
      }}>
        Create Challenge
      </Link>
    )
  }

  // checkUserIsGroupOwner(group_id) {
  //   this.state.user.user_id == this.context.groupList[group_id - 1].created_by
  // }

  render() {
    // TODO: complete challenge - checkbox interaction with state and API
    const group_id = parseInt(this.context.group.id)
    const { user } = this.context
    const { challengesInGroup } = this.context
    const { group } = this.context
    // const { created_by } = this.context.groupList[(group_id - 1)]
    // TODO:   {user_id && created_by && (this.state.user.user_id == this.context.groupList[group_id - 1].created_by) && this.renderCreateChallenge()}
    return (
      <div>
        <h1>Challenge List</h1>
        {(user) ? this.renderUserPoints() : this.renderJoinGroupButton()}
        {this.context.challengesInGroup.map(challenge => {
          return (
            <div key={challenge.id}>
              <input type='checkbox'  />
              <Link to={`/challenge/${challenge.id}`}>
                {challenge.name}
              </Link> - {challenge.description}
              Points: {challenge.points}
            </div>
            )
          })
        }
      </div>
    );
  }
}
