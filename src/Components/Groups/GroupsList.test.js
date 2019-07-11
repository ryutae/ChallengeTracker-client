import React from 'react';
import ReactDOM from 'react-dom';
import GroupsList from './GroupsList';

it('renders GroupsList component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
        <GroupsList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
