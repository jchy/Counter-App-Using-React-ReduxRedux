import { ActionTypes } from "./ActionTypes";

export const incrementCount = ({ count }) => {
  return {
    type: ActionTypes.INCREMENT_COUNTER,
    payload: {
      count
    }
  };
};

export const decrementCount = ({ count }) => {
  return {
    type: ActionTypes.DECREMENT_COUNTER,
    payload: {
      count
    }
  };
};
