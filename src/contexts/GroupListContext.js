import React, { Component } from 'react'

const GroupListContext = React.createContext({
  groupList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGroupList: () => {},
})
export default GroupListContext

export class GroupListProvider extends Component {
  state = {
    groupList: [],
    error: null,
  };

  setGroupList = groupList => {
    console.log(groupList)
    this.setState({ groupList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      groupList: this.state.groupList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGroupList: this.setGroupList,
    }
    return (
      <GroupListContext.Provider value={value}>
        {this.props.children}
      </GroupListContext.Provider>
    )
  }
}
