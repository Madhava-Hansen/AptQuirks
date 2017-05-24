import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';

const App = ({ store, children }) => {
  return (
    <div>
      <GreetingContainer />
      <br/>
    </div>
  )
}

export default App;
