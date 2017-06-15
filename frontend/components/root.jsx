import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { HashRouter as Router, Route } from 'react-router-dom';
import ApartmentMap from './apartment_map/apartment_map';
import ApartmentSearch from './apartment/apartment_search';
import ApartmentShowContainer from './apartment/apartment_show_container';
import SessionFormContainer from './session_form/session_form_container';
import ProfileShowContainer from './profile/profile_show_container';
import Home from './greeting/home';
import Footer from './footer/footer';
import QuirkFormContainer from './quirks/quirk_form_container';
import Header from './header/header';


export const Root = ({ store }) => (
    <Provider store={store} >
      <Router>
        <div>
          <App />
          <Route path="/home" component={ Home } ></Route>
          <Route path="/login" component={ SessionFormContainer }></Route>
          <Route path="/signup" component={ SessionFormContainer }></Route>
          <Route path="/apartments/:id" component={ ApartmentShowContainer } ></Route>
          <Route path="/profile" component={ProfileShowContainer}></Route>
          <Route path="/addquirk/:id" component={QuirkFormContainer}></Route>
          <Route path="/" component={ Footer } ></Route>
        </div>
    </Router>
    </Provider>
);
