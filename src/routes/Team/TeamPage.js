import React from 'react'


export default class TeamPage extends React.Component {
  render() {
    return (
      <div>
        Team Page
        <button onClick={() => this.props.history.goBack()}>
          Back
        </button>
      </div>
      );
  }
}
