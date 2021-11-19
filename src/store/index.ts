import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import questionsReducer from "./reducers";

const rootReducr = combineReducers({
  main: questionsReducer,
});

const store = createStore(rootReducr, applyMiddleware(compose(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export default store;
