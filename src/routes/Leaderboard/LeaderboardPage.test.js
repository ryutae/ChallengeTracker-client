import React from 'react';
import ReactDOM from 'react-dom';
import LeaderboardPage from './LeaderboardPage';

it('renders LeaderboardPage component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
        <LeaderboardPage match={
          {params:
            {
              group_id: 1
            }
          }
        }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
