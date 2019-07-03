import React from 'react'

const GroupPageContext = React.createContext({
  group: [],
  challengesInGroup: [],
  user: [],
  userIsGroupOwner: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  updatePoints: () => {}
})

export default GroupPageContext
