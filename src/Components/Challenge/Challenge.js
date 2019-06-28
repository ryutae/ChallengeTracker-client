import React from 'react'
import config from '../../config'
import TokenService from '../../services/TokenService'

export default class Challenge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challenge: {},
    }
  }

  componentDidMount() {
    const { challenge_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenge/${challenge_id}`)
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        challenge: resJson.data
      })
    })
  }

  handleDelete() {
    //if not admin user, function will not work
    // TODO: fix the that = this
    let that = this
    console.log('handleDelete initiated')
    const { challenge_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenge/${challenge_id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      that.props.history.goBack()
    })
  }

  updatePoints = () => {
    console.log('updatePoints started')
    fetch(`${config.API_ENDPOINT}/user/updatepoints`, {
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
    // TODO: COMPLETE CHALLENGE BUTTON
    console.log(`completed the challenge`)
    const { challenge_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenge/complete/${challenge_id}`, {
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
    .then(resJson => {
      console.log(resJson)
    })
    .then(this.updatePoints)
    .catch()
  }


  render() {
    return (
      <div>
        <button
          className='complete-challenge'
          onClick={this.handleCompleteChallenge}
        >
          Complete
        </button>
        <h4>Name: {this.state.challenge.name}</h4>
        <p>DESCRIPTION: {this.state.challenge.description}</p>
        <p>Points: {this.state.challenge.points}</p>
        <button onClick={e => this.handleDelete()}>
          Delete
        </button>
        <button onClick={() => this.props.history.goBack()}>
          Back
        </button>
      </div>
    )
  }
}
