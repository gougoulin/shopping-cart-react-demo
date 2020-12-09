import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

const preloadState = {};

/**
 * add devtools with middleware
 */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// const composeEnhacer = compose;
// const store = createStore(
//   rootReducer,
//   preloadState,
// composeEnhacer(applyMiddleware(thunk))
//  + window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// applyMiddleware(thunk)
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

/**
 * simple way to add redux devtools, no middleware
 */
/* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducer,
//   /* preloadState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
/* eslint-enable */

const store = createStore(rootReducer, preloadState, enhancer);

export default store;
