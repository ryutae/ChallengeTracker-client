import React from 'react'
import './CreateChallenge.css'
import config from '../../config'

//admin user only
export default class CreateChallenge extends React.Component {
  handleCreateChallenge(e) {
    e.preventDefault()
    const that = this
    fetch(`${config.API_ENDPOINT}/challenge/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.challenge_name.value,
        description: e.target.challenge_description.value,
        points: e.target.challenge_points.value,
      })
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      that.props.history.push('/')
    })
    console.log('creating challenge')

  }
  render() {
    return (
      <form onSubmit={e => this.handleCreateChallenge(e)}>
        <label htmlFor='challenge_name'>Name</label>
        <input name='challenge_name' id='challenge_name'/>
        <label htmlFor='challenge_description'>Description</label>
        <input description='challenge_description' id='challenge_description'/>
        <label htmlFor='challenge_points'>Points</label>
        <input points='challenge_points' id='challenge_points'/>
        <button>Create Challenge</button>
      </form>
    )
  }
}
