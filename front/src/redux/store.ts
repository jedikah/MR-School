import thunk, { ThunkAction } from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, Action } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";

import { sessionReducer } from "./session/sessionReducer";
import { env } from "../configs";

const rootReducer = combineReducers({
  session: sessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const makeStore: MakeStore<RootState> = () => {
  const devToolsEnhancer = composeWithDevTools({
    realtime: env.NODE_ENV === "dev" ? true : false,
    port: 8000,
    hostname: "localhost",
  });

  const store = createStore(
    rootReducer,
    devToolsEnhancer(applyMiddleware(thunk))
  );
  return store;
};

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
