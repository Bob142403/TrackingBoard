import { getState } from "./store";

export const getTasks = (state: getState) => state.tasks.tasks;
export const getClickedTask = (state: getState) => state.tasks.status;
export const getTitles = (state: getState) => state.tasks.titles;
