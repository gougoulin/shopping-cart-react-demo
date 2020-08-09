import React from "react";
import "./css/style.scss";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import Header from "./page/header";
import Home from "./page/home";
import Help from "./page/help";
import Contact from "./page/contact";
import Filter from "./page/filter";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) + window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Filter />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
