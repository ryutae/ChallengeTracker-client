import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ChallengesList from '../Components/ChallengesList/ChallengesList'
export default class GroupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challenges: [],
      error: null,
    }
  }
  //put the state in the context
  componentDidMount() {
    const { group_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenge/group/${group_id}`)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.setState({
        challenges: resJson.data
      })
    })
    .catch(this.setState({ error: true }))
  }

  render() {
    const { group_id } = this.props.match.params
    // TODO: Leaderboard
    // TODO: Your Team
    // TODO: Challenges
    return (
      <div className='GroupPage'>
        <h1>Group Page</h1>
        <Link to='/team'>
          Team - to do
        </Link>
        <ChallengesList challenges={this.state.challenges}/>
      </div>
      );
  }
}
