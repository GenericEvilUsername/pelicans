import { connectRouter, routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

const history = createHashHistory();
const loggerMiddleware = createLogger();

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history)
  });

const configureStore = preloadedState => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware, loggerMiddleware))
  );
  return store;
};

const preloadedState = {};

export { history };
export default configureStore(preloadedState);
