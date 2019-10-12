import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";

class Application extends PureComponent {
  render() {
    return (
      <div className="container">
        <App />
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application>
        <Switch>
          <Route exact path="/" render={() => <div>root</div>} />
        </Switch>
      </Application>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
