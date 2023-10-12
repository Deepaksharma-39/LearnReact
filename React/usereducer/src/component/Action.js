export const incrementAction = { type: "Increment" };
export const decrementAction = { type: "Decrement" };
export const resetAction = { type: "Reset" };

export const addByValueAction = (value) => {
  return { type: "AddValue", payload: value };
};
export const minusByValueAction = (value) => {
  return { type: "MinusValue", payload: value };
};
