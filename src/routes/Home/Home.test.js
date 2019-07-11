import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';

it('renders Home component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Home/>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
