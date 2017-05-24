import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { HashRouter as Router, Route } from 'react-router-dom';
import ApartmentMap from './apartment_map/apartment_map';
import ApartmentSearch from './apartment/apartment_search';
import ApartmentSearchContainer from './apartment/apartment_search_container';
import ApartmentShowContainer from './apartment/Apartment_show_container';
import SessionFormContainer from './session_form/session_form_container';


export const Root = ({ store }) => (
    <Provider store={store} >
      <Router>
        <div>
          <Route path="/" component={ ApartmentSearchContainer } ></Route>
          <App />
          <Route path="/login" component={ SessionFormContainer }></Route>
          <Route path="/signup" component={ SessionFormContainer }></Route>
          <Route path="/apartments/show" component={ ApartmentShowContainer } ></Route>
        </div>
    </Router>
    </Provider>
);
