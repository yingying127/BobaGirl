const pings = (state = [], action) => {
  if ( "ADD_PING") {
    return [...state, "action.ping"];
  }
  return state;
};
