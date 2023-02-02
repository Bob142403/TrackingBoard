import * as toolkit from "@reduxjs/toolkit";
import tasksReducer from "./tasks-reducer";

export const configureStore = () =>
  toolkit.configureStore({
    reducer: {
      tasks: tasksReducer,
    },
  });

export type myStore = ReturnType<typeof configureStore>;
export type getState = ReturnType<myStore["getState"]>;
