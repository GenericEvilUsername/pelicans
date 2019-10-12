import { connectRouter, routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

const history = createHashHistory();

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history)
  });

const configureStore = preloadedState => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
  return store;
};

const preloadedState = {};

export { history };
export default configureStore(preloadedState);
