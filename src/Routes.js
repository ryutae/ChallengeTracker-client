import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Challenge from './Components/Challenge/Challenge'
import CreateChallenge from './Components/CreateChallenge/CreateChallenge'

export default class Routes extends React.Component {
  render() {
  return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/challenge/:id' component={Challenge}/>
          <Route path='/create' component={CreateChallenge}/>
        </Switch>
      </div>
    );
  }
}
