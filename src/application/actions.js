const INITIALIZE_DATA = "initializeData";

const initializeData = (data) => ({ type: INITIALIZE_DATA, ...data });

export { initializeData, INITIALIZE_DATA };