const INITIALIZE_DATA = "initializeData";
const SET_SEASON = "setSeason";

const initializeData = data => ({ type: INITIALIZE_DATA, ...data });
const setSeason = (season, stats, table, games) => ({
  type: SET_SEASON,
  stats,
  season,
  table,
  games
});

export { initializeData, INITIALIZE_DATA, setSeason, SET_SEASON };
