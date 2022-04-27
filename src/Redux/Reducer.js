import { ActionTypes } from "./ActionTypes";

const initState = {
  count: 0
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER: {
      const updatedCount = {
        count: action.payload.count + 1
      };
      return updatedCount;
    }
    case ActionTypes.DECREMENT_COUNTER: {
      const updatedCount = {
        count: action.payload.count - 1
      };
      return updatedCount;
    }
    default:
      return state;
  }
};

export default reducer;
