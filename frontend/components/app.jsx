import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';

const App = ({ store, children }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      <GreetingContainer />
      <br/>
    </div>
  )
}

export default App;
