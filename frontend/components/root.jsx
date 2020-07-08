import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import ConversationsIndexContainer from "./messages/inbox_container";
import ApartmentShowContainer from "./apartment/apartment_show_container";
import SessionFormContainer from "./session_form/session_form_container";
import UserProfileContainer from "./profile/user_profile_container";
import Home from "./greeting/home";
import FooterContainer from "./footer/footer_container";
import MessageIndexContainer from "./messages/message_index_container";
import ComposeMessageContainer from "./messages/compose_message_container";
import SweepStakes from './sweepstakes/enter_sweepstakes';
import App from "./app";

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <App />
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={SessionFormContainer}></Route>
          <Route path="/signup" component={SessionFormContainer}></Route>
          <Route
            path="/apartments/:id"
            component={ApartmentShowContainer}
          ></Route>
          <Route path="/profile" component={UserProfileContainer}></Route>
          <Route path="/inbox" component={ConversationsIndexContainer}></Route>
          <Route path="/compose" component={ComposeMessageContainer}></Route>
          <Route path="/sweepstakes" component={SweepStakes}></Route>
          <Route path="/messages/:id" component={MessageIndexContainer}></Route>
          <Route path="/" component={FooterContainer}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
