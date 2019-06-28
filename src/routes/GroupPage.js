import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ChallengesList from '../Components/ChallengesList/ChallengesList'
import TokenService from '../services/TokenService'


export default class GroupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challenges: [],
      error: null,
      joinGroupMessage: null
    }
  }

  renderJoinedGroup() {
    console.log('renderJoinedGroup')
    return (
      <h3>Joined Group!</h3>
    )
    this.forceUpdate()

  }



  handleJoinGroup = e => {
    debugger
    e.preventDefault()
    this.setState({
      error: null,
      groupJoined: true
     })
    const { group_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/groups/join/${group_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res =>
      (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
    .then(res =>
      this.setState({
        joinGroupMessage: 'Joined group!'
      })
      // this.renderJoinedGroup()

    )
    .catch(res => {
      this.setState({ error: res.error })
    })
  }
  //put the state in the context
  componentDidMount() {
    const { group_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenge/group/${group_id}`)
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        challenges: resJson.data
      })
    })
    .catch(this.setState({ error: true }))
  }

  render() {
    const { group_id } = this.props.match.params
    const { error } = this.state
    // TODO: Leaderboard
    // TODO: Your Team
    // TODO: Challenges
    // TODO: Edit Group - admin
    // TODO: Join Group
    return (
      <div className='GroupPage'>
        <h1>Group Page</h1>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <ul>
          <li>
            <Link to='/team'>
              Team - to do
            </Link>
          </li>
          <li>
            <Link to={`${group_id}/leaderboard`}>
              Leaderboard
            </Link>
          </li>
        </ul>
        <ChallengesList
          group_id={group_id}
          challenges={this.state.challenges}
        />
      </div>
      );
  }
}
