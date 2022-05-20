import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import history from "./history";
import Routes from './components/Routes';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);