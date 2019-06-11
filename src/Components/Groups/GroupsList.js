import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'

export default class GroupsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
    }
  }
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/groups/all`)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.setState({
        groups: resJson.data
      })
    })
  }
  render() {
  return (
    <div>
      <h3>Groups List</h3>
      {this.state.groups.map(group => {
        return (
          <div key={group.id}>
            <Link to={`/groups/${group.id}`}>
                {group.name}
            </Link> - {group.description}
          </div>
          )
        })
      }
    </div>
    );
  }
}
