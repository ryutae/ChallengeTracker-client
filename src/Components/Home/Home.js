import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challenges: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:2222/challenge/all')
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
        <h1>Home Component</h1>
        {this.state.challenges.map(challenge => {
          return (
            <div key={challenge.id}>
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
