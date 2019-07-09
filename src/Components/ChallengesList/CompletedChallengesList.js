import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/TokenService'
import GroupPageContext from '../../contexts/GroupPageContext'

export default class CompletedChallengesList extends React.Component {
  static contextType = GroupPageContext

  state = {
    completedChallengesList: [],
    error: ''
  }

  componentDidMount() {
    const group_id = this.context.group.id
    this.setState({ error: ''})
    fetch(`${config.API_ENDPOINT}/challenge/group/${group_id}/completed`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res => res.json())
    .then(resJson =>
      this.setState({
        completedChallengesList: resJson
      })
    )
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  checkUserIsGroupOwner() {
    return (this.context.user.user_id === this.context.group.created_by)
  }

  render() {
    return (
      <div className='completed-challenges'>
        <h3>Completed Challenges</h3>
        {(this.state.completedChallengesList.length === 0) && <p>Haven't completed anything yet!</p>}
        {this.state.completedChallengesList.map(challenge => {
          return (
            <Link to={`/challenge/${challenge.challenge_id}`}>
              <div className='challenge-list-item' key={challenge.id}>
                <div className='challenge-name'>
                  <span>{challenge.challenge_name}</span>{challenge.challenge_description}
                </div>
                <p>{challenge.points} Points</p>
              </div>
            </Link>
            )
          })
        }
      </div>
    )
  }
}
