import { createSelector } from "@reduxjs/toolkit";
import { getState } from "./store";

export const getTasks = (state: getState) => state.tasks.tasks;
export const getClickedTask = (state: getState) => state.tasks.status;
