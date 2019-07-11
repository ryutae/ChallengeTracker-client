import React from 'react';
import ReactDOM from 'react-dom';
import CreateChallenge from './CreateChallenge';

it('renders CreateChallenge component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
        <CreateChallenge location={
          {
            state: {
              group_id: 1
            }
          }
        }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
