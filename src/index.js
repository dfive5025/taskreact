import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
// import { store } from "./redux/store";
import { pagestore } from "./redux2page/pageStore";
import Car from "./car";
import ColorState from "./stateTest/colorState";
import { BrowserRouter } from "react-router-dom";
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

//const element = <Welcome name="react dat"/>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ColorState /> */}
    {/* <Car color="red"></Car>
    <Welcome name="ok"></Welcome> */}

    <Provider store={pagestore}>
      <BrowserRouter>
        <App headerProps="32f32f23" contentProps="content" />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
