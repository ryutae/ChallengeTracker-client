import React from 'react';
import ReactDOM from 'react-dom';
import ChallengesList from './ChallengesList';

it('renders ChallengesList component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
        <ChallengesList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
