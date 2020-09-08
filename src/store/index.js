import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import messenger from "./messenger/reducer";
// import cart from "./cart/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  messenger,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export default () => createStore(rootReducer, enhancer);
