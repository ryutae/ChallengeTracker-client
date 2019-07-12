import React from 'react'
import config from '../../config'
import TokenService from '../../services/TokenService'
import GroupPageContext from '../../contexts/GroupPageContext'
export default class Challenge extends React.Component {
  static contextType = GroupPageContext
  constructor(props) {
    super(props)
    this.state = {
      challenge: {},
      challengeComplete: null,
      date_completed: null
    }
  }

// Fetches challenge info and checks if challenge is completed by user
  componentDidMount() {
    const { challenge_id } = this.props.match.params
    Promise.all([
    fetch(`${config.API_ENDPOINT}/challenges/${challenge_id}`),
    fetch(`${config.API_ENDPOINT}/challenges/complete/${challenge_id}`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    ])
    .then(([res1, res2]) => {
      return Promise.all([res1.json(), res2.json()])
    })
    .then(([res1Json, res2Json]) => {
      this.setState({
        challenge: res1Json.data,
        challengeComplete: res2Json.challengeComplete,
        date_completed: res2Json.date_completed
      })
    })
  }

  handleDelete = () => {
    //if not admin user, function will not work
    // TODO: fix the that = this
    let that = this
    const { challenge_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenges/${challenge_id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(resJson => {
      that.props.history.goBack()
    })
  }

  updatePoints = () => {
    fetch(`${config.API_ENDPOINT}/users/updatepoints`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        group_id: this.state.challenge.group_id
      })
    })
  }

  handleCompleteChallenge = () => {
    const { challenge_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenges/complete/${challenge_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        points: this.state.challenge.points,
        group_id: this.state.challenge.group_id
      })
    })
    .then(res => res.json())
    .then(this.updatePoints)
    .then(this.props.history.goBack())
    .catch()
  }

  renderDeleteButton() {
      return (
        <button onClick={this.handleDelete}>
          Delete
        </button>
      )
  }

  checkUserIsGroupOwner() {
    return ((this.context.user.user_id === this.context.group.created_by) && (!!this.context.user.user_id))
  }

  checkUserInGroup() {
    return (!!this.context.user.points)
  }

  renderCompleteChallengeButton() {
    return (
      <button
        className='complete-challenge-button'
        onClick={this.handleCompleteChallenge}
      >
        Complete
      </button>
    )
  }

  checkIfChallengeComplete() {
    return this.state.challengeComplete
  }

  renderCompletedDate() {
    return (
      <p>
      Completed on  {this.state.date_completed}
      </p>
    )
  }

  render() {
    return (
      <div>
        <h4>Challenge: {this.state.challenge.name}</h4>
        <p>{this.state.challenge.description}</p>
        <p>{this.state.challenge.points} Points</p>
        {this.checkIfChallengeComplete() ? this.renderCompletedDate() : this.renderCompleteChallengeButton()}
        <button onClick={() => this.props.history.goBack()}>
          Back
        </button>
        {this.checkUserIsGroupOwner() && this.renderDeleteButton()}
      </div>
    )
  }
}
