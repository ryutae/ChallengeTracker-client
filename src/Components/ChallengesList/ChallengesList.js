import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/TokenService'

export default class ChallengesList extends React.Component {
  static defaultProps = {
    challenges: [],
  }

  state = {
    user: [],
    error: ''
  }

  componentDidMount() {
    const { group_id } = this.props
    this.setState({ error: ''})
    fetch(`${config.API_ENDPOINT}/user/group/${group_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res => res.json())
    .then(resJson =>
      this.setState({
        user: resJson.data
      })
    )
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  render() {
    // TODO: complete challenge - checkbox interaction with state and API
    const { group_id } = this.props
    return (
      <div>
        <h1>Challenge List</h1>
        <Link to={{
          pathname: '/create-challenge',
          state: {
            group_id: group_id
          }
        }}>
          Create Challenge
        </Link>
        <p>Current Points: {this.state.user.points}</p>
        {this.props.challenges.map(challenge => {
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
