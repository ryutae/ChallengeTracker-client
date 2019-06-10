import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'

export default class ChallengesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challenges: [],
    }
  }
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/challenge/all`)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.setState({
        challenges: resJson.data
      })
    })
  }
  render() {
  return (
      <div>
        <h1>Challenge List</h1>
        <Link to='/create-challenge'>
          Create Challenge
        </Link>
        {this.state.challenges.map(challenge => {
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
