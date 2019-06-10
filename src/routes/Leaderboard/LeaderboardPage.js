import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

export default class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
    }
  }
  componentDidMount() {
    const group_id = this.props.match.params
    fetch(`${config.API_ENDPOINT}/groups/teams/all`)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.setState({
        groups: resJson.data
      })
    })
  }
  render() {
    // TODO: Get all teams and Points
    // TODO: order teams by points
    return (
      <div className='LeaderboardPage'>

      </div>
      );
  }
}
