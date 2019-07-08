import React, { Component } from 'react'

const UserContext = React.createContext({
  userLoggedIn: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setUserLoggedInTrue: () => {},
  setUserLoggedInFalse: () => {}
})
export default UserContext

export class UserProvider extends Component {
  state = {
    userLoggedIn: false,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }
  setUserLoggedInTrue = () => {
    this.setState({ userLoggedIn: true })
  }
  setUserLoggedInFalse = () => {
    this.setState({ userLoggedIn: false })
  }


  render() {
    const value = {
      userLoggedIn: this.state.userLoggedIn,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUserLoggedInTrue: this.setUserLoggedInTrue,
      setUserLoggedInFalse: this.setUserLoggedInFalse
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
