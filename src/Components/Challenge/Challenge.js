import React from 'react'

export default class Challenge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      challenge: {},
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`http://localhost:2222/challenge/one/${id}`)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.setState({
        challenge: resJson.data
      })
    })
  }

  handleDelete() {
    console.log('handleDelete initiated')
    const id = this.props.match.params.id
    fetch(`http://localhost:2222/challenge/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      //TO DO: delete feedback. Redirect. 
    })
  }


  render() {

    return (
      <div>
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
