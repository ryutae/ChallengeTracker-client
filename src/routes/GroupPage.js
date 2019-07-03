import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ChallengesList from '../Components/ChallengesList/ChallengesList'
import CompletedChallengesList from '../Components/ChallengesList/CompletedChallengesList'
import UncompletedChallengesList from '../Components/ChallengesList/UncompletedChallengesList'
import TokenService from '../services/TokenService'
import GroupPageContext from '../contexts/GroupPageContext'

export default class GroupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challengesInGroup: [],
      error: null,
      joinGroupMessage: null,
      group: [],
      user: []
    }
  }

  // renderJoinedGroup() {
  //   console.log('renderJoinedGroup')
  //   return (
  //     <h3>Joined Group!</h3>
  //   )
  //   this.forceUpdate()
  // }



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
    this.setState({
      challengesInGroup: [],
      error: null,
      joinGroupMessage: null,
      group: [],
      user: []
    })
    const { group_id } = this.props.match.params
    this.setState({ error: null })
    Promise.all([
      fetch(`${config.API_ENDPOINT}/challenge/group/${group_id}`),
      fetch(`${config.API_ENDPOINT}/groups/${group_id}`),
      fetch(`${config.API_ENDPOINT}/user/group/${group_id}`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        }
      })
    ])
    .then(([res1, res2, res3]) => {
      return Promise.all([res1.json(), res2.json(), res3.json()])
    })
    .then(([res1Json, res2Json, res3Json]) => {
      console.log(res1Json, res2Json, res3Json)
      this.setState({
        challengesInGroup: res1Json,
        group: res2Json,
        user: res3Json
      })
    })
    .catch(this.setState({ error: true }))
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
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        user:{points: resJson.points}
      })
    })
  }

  render() {
    const { group_id } = this.props.match.params
    // TODO: Leaderboard
    // TODO: Your Team
    // TODO: Challenges
    // TODO: Edit Group - admin
    // TODO: Join Group
    const contextValue = {
      group: this.state.group,
      challengesInGroup: this.state.challengesInGroup,
      user: this.state.user,
      error: this.state.error
    }
    return (
      <div className='GroupPage'>
        <GroupPageContext.Provider value={contextValue}>
          <h1>{this.state.group.name}</h1>
          <div role='alert'>
            {this.state.error && <p className='red'>{this.state.error}</p>}
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
          <ChallengesList/>
          {this.state.user.userInGroup && <CompletedChallengesList/>}
          {this.state.user.userInGroup  && <UncompletedChallengesList/>}
        </GroupPageContext.Provider>
      </div>
      );
  }
}
