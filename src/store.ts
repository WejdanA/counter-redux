import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";

export type RootState = {
  counter: ReturnType<typeof CounterReducer>;
};
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
