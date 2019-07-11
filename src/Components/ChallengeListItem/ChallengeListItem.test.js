import React from 'react';
import ReactDOM from 'react-dom';
import ChallengeListItem from './ChallengeListItem';
import {BrowserRouter} from 'react-router-dom';

it('renders ChallengeListItem component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <ChallengeListItem challenge={
        {
          "id": 1,
          "group_id": 1,
          "name": "test",
          "description": "test",
          "points": 100,
          "date_created": "2019-06-29T05:53:01.306Z"
        }
      }/>
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
