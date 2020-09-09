import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import messenger from "./messenger/reducer";
import usersReducer from "./users/reducers";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  messenger,
  usersReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export default () => createStore(rootReducer, enhancer);
