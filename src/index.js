import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import { UserProvider } from './contexts/UserContext'
import { GroupListProvider } from './contexts/GroupListContext'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <GroupListProvider>
        <App />
      </GroupListProvider>
    </UserProvider>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
