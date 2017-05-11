import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './form/session_form_container';

const App = ({ store, children }) => {
  return (
    <div>
      <GreetingContainer />
      { children }
      <Route path="/login" component={ SessionFormContainer }></Route>
      <Route path="/signup" component={ SessionFormContainer }></Route>
    </div>
  )
}

export default App;
