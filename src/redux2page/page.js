import { useDispatch, useSelector } from "react-redux";
import { Types } from "./pageType";

const Page1 = () => {
  const countValue = useSelector((state) => state.countValue);
  console.log(countValue);
  return (
    <div>
      <h1>Page 1</h1>
      <p>Value: {countValue}</p>
    </div>
  );
};

const Page2 = () => {
  const dispatch = useDispatch();
  const countValue = useSelector((state) => state.countValue);

  const increase = () => {
    dispatch({ type: Types.Increase });
  };

  const decrease = () => {
    dispatch({ type: Types.Decrease });
  };

  return (
    <div>
      <h1>Page 2</h1>
      <p>Value: {countValue}</p>
      <button onClick={increase}>INCREASE</button>
      <p></p>
      <button onClick={decrease}>DECREASE</button>
    </div>
  );
};

export { Page1, Page2 };
