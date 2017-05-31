import React from 'react';
import ApartmentSearchContainer from './apartment/apartment_search_container';
import GreetingContainer from './greeting/greeting_container';


import { Route, Link } from 'react-router-dom';

const App = ({ store, children }) => {
  return (
    <header>
      <div>
        <ApartmentSearchContainer />
        <GreetingContainer />
        <Link to="/home">Home</Link>
      </div>
    </header>

  )
}

export default App;
