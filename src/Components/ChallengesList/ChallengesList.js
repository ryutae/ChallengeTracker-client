import React from 'react'
import GroupPageContext from '../../contexts/GroupPageContext'
import ChallengeListItem from '../ChallengeListItem/ChallengeListItem'

export default class ChallengesList extends React.Component {
  static contextType = GroupPageContext

  renderUserPoints() {
    return (
      <p>Current Points: {this.context.user.points}</p>
    )
  }

// Render all the challenges in the group
  render() {
    const { user } = this.context
    const { challengesInGroup } = this.context
    return (
      <div>
        <h1>Challenge List</h1>
        {(user.userInGroup) && this.renderUserPoints()}
        <div className='full-challenge-list'>
        {(challengesInGroup === []) && <p>There aren't any challenges!</p>}
        {challengesInGroup.map(challenge => {
            return (<ChallengeListItem
              key={challenge.id}
              challenge={challenge}
            />
          )
          })
        }
        </div>
      </div>
    );
  }
}
