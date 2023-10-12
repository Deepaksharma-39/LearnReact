function Reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    case "Reset":
      return 0;

    case "AddValue":
      return state + action.payload;

    case "MinusValue":
      return state - action.payload;

    default:
      return state;
  }
}

export default Reducer;
