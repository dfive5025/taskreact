//import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./parentComponent";

// import Clock from "./Clock";
import { useState } from "react";
import Clock from "./Clock";
// import { store } from "./redux/store";
// import { decreaseCount, increaseCount } from "./redux/Action";
// import { counterReducer } from "./redux/reducer";
import { connect } from "react-redux";
import { Page1, Page2 } from "./redux2page/page";
import Thamchieu from "./refs/thamchieu";
import Xinchao from "./Xinchao";
import LoginPage from "./loginpage/login";

const orders = [100, 200, 300]; //demo state
function App() {
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur);
  //   return total;
  // }); //init = 1 , demo state

  // const total = orders.reduce((total, cur) => total + cur);

  // const handleIncrease = () => {
  //   //demo state
  //   // setCounter(counter + 1);
  //   setCounter((prevState) => prevState + 1);
  //   // setCounter((prevState) => prevState + 1);
  //   //  setCounter((prevState) => prevState + 1);
  // };

  //-------------------demo redux và redux kết hợp props-------
  // console.log("store", store.getState().count);
  // console.log(props);
  // const [count, setCount] = useState(store.getState().count);

  // const handleIncrease = () => {
  //   setCount((prev) => (prev += 1)); //redux kết hợp state nếu ko dùng props
  //   store.dispatch(increaseCount());
  // };

  // const handleDecrease = () => {
  //   setCount((prev) => (prev -= 1)); //redux kết hợp state nếu ko dùng props
  //   store.dispatch(decreaseCount());
  // };

  return (
    <div className="App">
      {/*-------------------demo props---------------------*/}
      {/* <h1>{props.headerProps}</h1>
      <h1>{props.contentProps}</h1> */}
      {/* <Clock /> */}
      {/* <h1>{props.count}</h1> cách dùng kết hợp props */}
      {/* <h1>{store.getState().count}</h1> */}
      {/*------------------demo state--------------------*/}
      {/* <h1>{counter}</h1>
      <button onClick={handleIncrease}>Tăng</button> */}
      {/*------------------demo component----------------------*/}
      {/* <ParentComponent /> */}
      {/*------------------demo HTML-------------------*/}
      <Xinchao name="dattt" />
      {/*-------------------demo clock mount, unmount------------------------*/}
      {/* <Clock></Clock> */}
      {/*-------------------demo redux và redux kết hợp props-------*/}
      {/* <h1>{store.getState().count}</h1> */}
      {/* <h1>{props.count}</h1>  */}
      {/* <button onClick={handleIncrease}>INCREASE</button>
      <p></p>
      <button onClick={handleDecrease}>DECREASE</button> */}
      {/*-------------------demo 2 page redux-------*/}
      <Page1 />
      <Page2 />

      {/*-------------------demo 2 refs-------*/}
      {/* <Thamchieu /> */}
    </div>
  );
}
// App.defaultProps = {
//   headerProp: "Header from props...",
//   contentProp: "Content from props...",
// };

// function mapStatetoProps(state) {
//   return {
//     count: state.count,
//   };
// }

export default App;
// export default connect(mapStatetoProps)(App);
// kết nối App component với Redux store thông qua hàm connect(mapStatetoProps).
// Khi state trong store thay đổi (do các action được dispatch),
// mapStateToProps sẽ được gọi lại và props mới sẽ được truyền vào App component.
