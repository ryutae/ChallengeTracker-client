import React from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './routes/LandingPage/LandingPage'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Challenge from './Components/Challenge/Challenge'
import CreateChallenge from './Components/CreateChallenge/CreateChallenge'
import CreateGroup from './Components/Groups/CreateGroup'
import Home from './routes/Home/Home'
import Team from './routes/Team/TeamPage'
import GroupPage from './routes/GroupPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'

export default class Routes extends React.Component {
  render() {
  return (
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/groups/:group_id' component={GroupPage}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/challenge/:challenge_id' component={Challenge}/>
          <Route path='/create-challenge' component={CreateChallenge}/>
          <Route path='/create-group' component={CreateGroup}/>
          <Route path='/team' component={Team}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}
