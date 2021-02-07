import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./reducer";

const myStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore;
