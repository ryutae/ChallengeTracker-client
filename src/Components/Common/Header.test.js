import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {BrowserRouter} from 'react-router-dom';

it('renders Header component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
