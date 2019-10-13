import stats from "../data/stats";
import games from "../data/games";
import tables from "../data/tables";
import { setSeason } from "./actions";

const loadSeason = season => {
  return dispatch => {
    let filter = s => s.season === season;
    let player_stats = stats.filter(filter);
    let table = tables.filter(filter);
    let matches = games.filter(filter);

    dispatch(setSeason(season, player_stats, table, matches));
  };
};

export { loadSeason };
