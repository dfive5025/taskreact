import { Types } from "./pageType";

const initState = {
  countValue: 0,
};
const pageReducer = (state = initState, action) => {
  console.log("Reducer called with action:", action);
  switch (action.type) {
    case Types.Increase:
      return {
        ...state,
        countValue: state.countValue + 1,
      };
    case Types.Decrease:
      return {
        ...state,
        countValue: state.countValue - 1,
      };
    default:
      return state;
  }
};

export default pageReducer;
