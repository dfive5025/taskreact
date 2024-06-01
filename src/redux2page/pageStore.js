import { createStore } from "redux";
import pageReducer from "./pageReducer";

export const pagestore = createStore(pageReducer);
