import React from "react";
import Header from "./header/header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFacebook, faInstagram);

const App = ({ store, children }) => {
  return <Header />;
};

export default App;
