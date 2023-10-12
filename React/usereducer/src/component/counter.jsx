import { useReducer, useState } from "react";
import Reducer from "./Reducer";
import {
  addByValueAction,
  decrementAction,
  incrementAction,
  minusByValueAction,
  resetAction,
} from "./Action";

const init={
    counter:0,
    isAuth:true,
    key:"value"
}

function Counter() {
  const [state, dispatch] = useReducer(Reducer, init);
  const [value, setValue] = useState(0);
  console.log(state);
  return (
    <>
      <div>Counter: {state.counter}</div>
      <input
        placeholder="Enter add by value"
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <button onClick={() => dispatch(incrementAction)}>Plus +1</button>
      <button onClick={() => dispatch(decrementAction)}>Minus -1</button>
      <button onClick={() => dispatch(resetAction)}>Reset</button>
      <button
        onClick={() => {
          const action = addByValueAction(value);
          dispatch(action);
        }}
      >
        Add by value
      </button>
      <button
        onClick={() => {
          const action = minusByValueAction(value);
          dispatch(action);
        }}
      >
        reduce by value
      </button>
    </>
  );
}

export default Counter;
