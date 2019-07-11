import React from 'react';
import ReactDOM from 'react-dom';
import Challenge from './Challenge';

it('renders Challenge component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Challenge match={
        {params:
          {
            challenge_id: 1
          }
        }
      }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
