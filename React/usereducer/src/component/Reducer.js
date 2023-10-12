function Reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return {...state, counter:state.counter+1};

    case "Decrement":
        return {...state, counter:state.counter-1};

    case "Reset":
        return {...state, counter:0};

    case "AddValue":
        return {...state, counter:state.counter+action.payload};


    case "MinusValue":
        return {...state, counter:state.counter-action.payload};


    default:
      return state;
  }
}

export default Reducer;
