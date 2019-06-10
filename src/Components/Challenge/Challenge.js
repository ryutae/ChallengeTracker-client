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
    const id = this.props.match.params.id
    fetch(`${config.API_ENDPOINT}/challenge/one/${id}`)
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
    let that = this
    console.log('handleDelete initiated')
    const id = this.props.match.params.id
    fetch(`${config.API_ENDPOINT}/challenge/one/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      that.props.history.push('/')
    })
  }


  render() {

    return (
      <div>
        <input type='checkbox' />
        Name: {this.state.challenge.name}
        DESCRIPTION: {this.state.challenge.description}
        Points: {this.state.challenge.points}
        <button onClick={e => this.handleDelete()}>
          Delete
        </button>
      </div>
    )
  }
}
