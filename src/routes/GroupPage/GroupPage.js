import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import ChallengesList from '../../Components/ChallengesList/ChallengesList'
import CompletedChallengesList from '../../Components/ChallengesList/CompletedChallengesList'
import UncompletedChallengesList from '../../Components/ChallengesList/UncompletedChallengesList'
import TokenService from '../../services/TokenService'
import GroupPageContext from '../../contexts/GroupPageContext'
import './GroupPage.css'

export default class GroupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challengesInGroup: [],
      error: null,
      joinedGroup: null,
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
    if (TokenService.hasAuthToken()) {
    e.preventDefault()
    this.setState({
      error: null
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
        joinedGroup: true
      })

    )
    .catch(res => {
      this.setState({ error: res.error })
    })
  }
  else {this.props.history.push('/login')}
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

  renderJoinGroupButton() {
    return (
      <button
        className='JoinButton'
        onClick={this.handleJoinGroup}>
        Join Group
      </button>
    )
  }

  renderUserPoints() {
    return (
      <h3 className='current-points'>Current Points: {this.state.user.points}</h3>
    )
  }

  render() {
    const { group_id } = this.props.match.params
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
          {(!this.state.user.userInGroup) && (!this.state.joinedGroup) && this.renderJoinGroupButton()}

          {this.state.user.userInGroup && this.renderUserPoints()}
          <Link to={`${group_id}/leaderboard`}>
            <p>Leaderboard</p>
          </Link>
          {(!this.state.user.userInGroup) && <ChallengesList/>}
          {this.state.user.userInGroup  && <UncompletedChallengesList/>}
          {this.state.user.userInGroup && <CompletedChallengesList/>}
        </GroupPageContext.Provider>
      </div>

      );
  }
}
