import React from 'react';
import './styles/App.scss';

import { Users } from './components/Users/Users';

export const App = () => {
  return(
  <div className='App'>
    <div className='inner'>
      <div className='content'>
        <Users />
      </div>
    </div>
  </div>
)};


export default App;
