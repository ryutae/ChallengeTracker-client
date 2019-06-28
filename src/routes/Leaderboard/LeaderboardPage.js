import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'

export default class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  componentDidMount() {
    const group_id = this.props.match.params
    fetch(`${config.API_ENDPOINT}/groups/${group_id["group_id"]}/allusers`)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.setState({
        users: resJson.data
      })
    })
  }
  render() {
    // TODO: Get all teams and Points
    // TODO: order teams by points
    return (
      <div className='LeaderboardPage'>
        <h3>Leaderboard</h3>
        {this.state.users.map((user, i) => {
          return (
            <div key={user.user_id}>
              <p>{i+1}. {user.full_name}: {user.points} Points</p>
            </div>
            )
          })
        }
        <button onClick={() => this.props.history.goBack()}>
          Back
        </button>
      </div>
      );
  }
}
