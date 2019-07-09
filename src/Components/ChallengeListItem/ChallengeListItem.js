import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ChallengeListItem.css'
export default class ChallengeListItem extends Component {
  render() {
    const { challenge } = this.props
    return (
      <Link to={`/challenge/${challenge.id}`}>
        <div className='challenge-list-item' key={challenge.id}>
          <div className='challenge-name'>
            <span>{challenge.name}</span>{challenge.description}
          </div>
          <p>{challenge.points} Points</p>
        </div>
      </Link>
    )
  }
}
