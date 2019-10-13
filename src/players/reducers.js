import { INITIALIZE_DATA } from "../application/actions";

export default (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return action.players;
    default:
      return state;
  }
};
