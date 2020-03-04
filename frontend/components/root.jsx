import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import ConversationsIndexContainer from './conversation/conversation_index_container';
import ApartmentShowContainer from './apartment/apartment_show_container';
import SessionFormContainer from './session_form/session_form_container';
import ProfileShowContainer from './profile/profile_show_container';
import QuirkFormContainer from './quirks/quirk_form_container';
import Home from './greeting/home';
import FooterContainer from './footer/footer_container';
import MessageIndexContainer from './conversation/message_index_container';
import NewMessageContainer from './conversation/new_message_container';
import App from './app';

export const Root = ({store}) => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div>
          <App />
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={SessionFormContainer}></Route>
          <Route path="/signup" component={SessionFormContainer}></Route>
          <Route path="/apartments/:id" component={ApartmentShowContainer}></Route>
          <Route path="/profile" component={ProfileShowContainer}></Route>
          <Route path="/addquirk/:id" component={QuirkFormContainer}></Route>
          <Route path="/inbox" component={ConversationsIndexContainer}></Route>
          <Route path="/message/new" component={NewMessageContainer}></Route>
          <Route path="/messages/:id" component={MessageIndexContainer}></Route>
          <Route path="/" component={FooterContainer}></Route>
        </div>
    </BrowserRouter>
    </Provider>
  )
};
