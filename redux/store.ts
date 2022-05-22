import { createWrapper, Context } from "next-redux-wrapper";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { resourcesReducer } from "./resources/resourcesReducer";

const rootReducer = combineReducers({
  resources: resourcesReducer,
  //can add more
});

const makeStore = (context: Context) => {
  return createStore(rootReducer, composeWithDevTools());
};

export const initStore = createWrapper(makeStore, { debug: true });
