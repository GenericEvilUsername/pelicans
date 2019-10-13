import { connectRouter, routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import statsReducer from "./stats/reducers";
import gamesReducer from "./games/reducers";
import tablesReducer from "./tables/reducers";

const history = createHashHistory();
const loggerMiddleware = createLogger();

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    games: gamesReducer,
    stats: statsReducer,
    tables: tablesReducer
  });

const configureStore = preloadedState => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
  return store;
};

const preloadedState = { games: [], stats: [], tables: [] };

export { history };
export default configureStore(preloadedState);
