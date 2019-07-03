import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/TokenService'
import GroupPageContext from '../../contexts/GroupPageContext'

export default class UncompletedChallengesList extends React.Component {
  static contextType = GroupPageContext

  state = {
    uncompletedChallengesList: [],
    error: ''
  }

  componentDidMount() {
    const group_id = this.context.group.id
    this.setState({ error: ''})
    fetch(`${config.API_ENDPOINT}/challenge/group/${group_id}/uncompleted`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res => res.json())
    .then(resJson =>
      this.setState({
        uncompletedChallengesList: resJson
      })
    )
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  renderUserPoints() {
    return (
      <p>Current Points: {this.context.user.points}</p>
    )
  }


  checkUserIsGroupOwner() {
    return (this.context.user.user_id === this.context.group.created_by)
  }

  render() {
    return (
      <div>
        <h3>Incomplete Challenges</h3>
        {this.state.uncompletedChallengesList.map(challenge => {
          return (
            <div key={challenge.id}>
              <input type='checkbox'  />
              <Link to={`/challenge/${challenge.id}`}>
                {challenge.name}
              </Link> - {challenge.description}
              <p>{challenge.points} Points</p>
            </div>
            )
          })
        }
      </div>
    );
  }
}
