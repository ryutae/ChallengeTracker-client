import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ChallengeListItem.css'
export default class ChallengeListItem extends Component {
  render() {
    const { challenge } = this.props
    return (
      <div className='challenge-list-item'
      key={challenge.id}>
        <Link to={`/challenge/${challenge.id}`}>
          <span>{challenge.name}</span>{challenge.description}
        </Link>
        <p>{challenge.points} Points</p>
      </div>
    )
  }
}
