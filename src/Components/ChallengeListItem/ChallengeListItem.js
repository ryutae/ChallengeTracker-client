import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ChallengeListItem.css'
export default class ChallengeListItem extends Component {
  render() {
    const { challenge } = this.props
    return (
      <Link to={`/challenge/${challenge.id}`}>
        <div className='challenge-list-item'
        key={challenge.id}>
          <div className='ChallengeListItem_details'>
            <div className='ChallengeListItem_name'>
              <h4>{challenge.name}</h4>
            </div>
            <div className='ChallengeListItem_desc'>
              <p>{challenge.description}</p>
            </div>
          </div>
          <div className='ChallengeListItem_points'>
            <h4>{challenge.points} Points</h4>
          </div>
        </div>
      </Link>
    )
  }
}
