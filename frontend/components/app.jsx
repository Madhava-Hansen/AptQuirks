import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import ApartmentMap from './apartment_map/apartment_map';
import ApartmentSearch from './apartment/apartments_search';
import ApartmentsSearchContainer from './apartments_search_container';

const App = ({ store, children }) => {
  return (
    <div>
      <GreetingContainer />
      { children }
      <Route path="/login" component={ SessionFormContainer }></Route>
      <Route path="/signup" component={ SessionFormContainer }></Route>
      <Route path="/search/apartments" component={ ApartmentsSearchContainer }></Route>
      <br/>
      <ApartmentSearch />
      <ApartmentMap />
    </div>
  )
}

export default App;
