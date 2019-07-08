import React from 'react'

const GroupPageContext = React.createContext({
  group: [],
  challengesInGroup: [],
  user: [],
  userIsGroupOwner: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  updatePoints: () => {},
  joinedGroup: () => {}
})

export default GroupPageContext
