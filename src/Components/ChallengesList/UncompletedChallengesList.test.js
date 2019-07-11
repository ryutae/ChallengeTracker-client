import React from 'react';
import ReactDOM from 'react-dom';
import UncompletedChallengesList from './UncompletedChallengesList';

it('renders UncompletedChallengesList component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
        <UncompletedChallengesList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
