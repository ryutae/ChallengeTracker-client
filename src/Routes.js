import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ChallengesList from './Components/ChallengesList/ChallengesList'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Challenge from './Components/Challenge/Challenge'
import CreateChallenge from './Components/CreateChallenge/CreateChallenge'
import CreateGroup from './Components/Groups/CreateGroup'
import Home from './Components/Home/Home'
import GroupMain from './Components/Groups/GroupMain'

export default class Routes extends React.Component {
  render() {
  return (
      <div>
        <Switch>
          <Route exact path='/' component={ChallengesList}/>
          <Route path='/home' component={Home}/>
          <Route path='/groups/:id' component={GroupMain}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/challenge/:id' component={Challenge}/>
          <Route path='/create-challenge' component={CreateChallenge}/>
          <Route path='/create-group' component={CreateGroup}/>
        </Switch>
      </div>
    );
  }
}
