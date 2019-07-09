import React from 'react'
import './CreateChallenge.css'
import config from '../../config'
import TokenService from '../../services/TokenService'
//admin user only
export default class CreateChallenge extends React.Component {
  handleCreateChallenge(e, group_id) {
    e.preventDefault()
    //todo: fix binding of this
    const that = this
    fetch(`${config.API_ENDPOINT}/challenge/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        group_id: group_id,
        name: e.target.challenge_name.value,
        description: e.target.challenge_description.value,
        points: e.target.challenge_points.value,
      })
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      // that.props.history.push('/')
      that.props.history.goBack()
    })
    console.log('creating challenge')

  }
  render() {
    const { group_id } = this.props.location.state
    // TODO: pass group_id to creating the challenge to save in backend
    return (
      <form onSubmit={e => this.handleCreateChallenge(e, group_id)} className='create-challenge-form'>
        <input name='challenge_name' id='challenge_name' placeholder='Name' required/>
        <input name='challenge_description' id='challenge_description' placeholder='Description' required/>
        <input  name='challenge_points' id='challenge_points' type='number' placeholder='Points' required/>
        <button>Create Challenge</button>
      </form>
    )
  }
}
