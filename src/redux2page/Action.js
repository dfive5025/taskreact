import { Types } from "./pageType";

export const increaseCount = () => {
  return {
    type: Types.Increase,
  };
};

export const decreaseCount = () => {
  return {
    type: Types.Decrease,
  };
};
