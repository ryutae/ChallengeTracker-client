import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'

export default class ChallengesList extends React.Component {
  static defaultProps = {
    challenges: [],
  }

  render() {
    // TODO: return only challenges from group
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
        {this.props.challenges.map(challenge => {
          return (
            <div key={challenge.id}>
            <input type='checkbox' />
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
