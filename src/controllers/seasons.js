import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadSeason } from "../application/functions";

class Season extends PureComponent {
  componentDidMount() {
    let { dispatch, match } = this.props;
    dispatch(loadSeason(match.params.id));
  }
  render() {
    return "hello there";
  }
}

export default connect(null)(Season);
