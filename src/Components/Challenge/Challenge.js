import React from 'react'
import config from '../../config'

export default class Challenge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challenge: {},
    }
  }

  componentDidMount() {
    const { challenge_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenge/${challenge_id}`)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.setState({
        challenge: resJson.data
      })
    })
  }

  handleDelete() {
    //if not admin user, function will not work
    // TODO: fix the that = this
    let that = this
    console.log('handleDelete initiated')
    const { challenge_id } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/challenge/${challenge_id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      that.props.history.goBack()
    })
  }


  render() {
    return (
      <div>
        <input type='checkbox' />Complete
        <h4>Name: {this.state.challenge.name}</h4>
        <p>DESCRIPTION: {this.state.challenge.description}</p>
        <p>Points: {this.state.challenge.points}</p>
        <button onClick={e => this.handleDelete()}>
          Delete
        </button>
        <button onClick={() => this.props.history.goBack()}>
          Back
        </button>
      </div>
    )
  }
}
