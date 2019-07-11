import React from 'react';
import ReactDOM from 'react-dom';
import CompletedChallengesList from './CompletedChallengesList';

it('renders CompletedChallengesList component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
        <CompletedChallengesList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
