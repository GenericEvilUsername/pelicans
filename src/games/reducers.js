import { SET_SEASON } from "../application/actions";

export default (state = [], action) => {
  switch (action.type) {
    case SET_SEASON:
      return action.games;
    default:
      return state;
  }
};
