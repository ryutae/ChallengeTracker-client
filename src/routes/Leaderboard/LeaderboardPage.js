import React from 'react'
import config from '../../config'
import './LeaderboardPage.css'

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
      this.setState({
        users: resJson.data
      })
    })
  }
  render() {
    return (
      <div className='LeaderboardPage'>
        <h3>Leaderboard</h3>
        <div className='leaderboard-list'>
        {this.state.users.map((user, i) => {
          return (
            <div key={user.user_id} className='leaderboard-user-item'>
              <div className ='leaderboard-user-name'>
                <p>{i+1}. {user.full_name}</p>
              </div>
              <div className='leaderboard-user-points'>
                <p>{user.points} Points</p>
              </div>
            </div>
            )
          })
        }
        <button onClick={() => this.props.history.goBack()}>
          Back
        </button>
      </div>
      </div>
      );
  }
}
