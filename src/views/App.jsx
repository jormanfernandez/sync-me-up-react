import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from 'redux/store';
import { Root } from "views/pages/Root";


export const App = () => (
  <Provider store={store}>
    <Router>
      <Root/>
    </Router>
  </Provider>
);