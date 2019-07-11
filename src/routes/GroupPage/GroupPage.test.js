import React from 'react';
import ReactDOM from 'react-dom';
import GroupPage from './GroupPage';
import {BrowserRouter} from 'react-router-dom';

it('renders GroupPage component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <GroupPage match={
          {params:
            {
              group_id: 1
            }
          }
        }/>
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
