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
import Leaderboard from './routes/Leaderboard/LeaderboardPage'
import PrivateRoute from './Components/Utils/PrivateRoute'
import PublicRoute from './Components/Utils/PublicRoute'

export default class Routes extends React.Component {
  render() {
  return (
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route exact path='/groups/:group_id' component={GroupPage}/>
          <PublicRoute path='/login' component={Login}/>
          <PublicRoute path='/register' component={Register}/>
          <PrivateRoute path='/challenge/:challenge_id' component={Challenge}/>
          <PrivateRoute path='/create-challenge' component={CreateChallenge}/>
          <PrivateRoute path='/create-group' component={CreateGroup}/>
          <PrivateRoute path='/team' component={Team}/>
          <PrivateRoute path='/groups/:group_id/leaderboard'  component={Leaderboard}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}
