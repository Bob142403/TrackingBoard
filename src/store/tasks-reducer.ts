import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { Task } from "../types/task";

interface TaskState {
  tasks: Task[];
  titles: string[];
  status: string;
}

const initialState: TaskState = {
  tasks: [],
  titles: ["New", "In Progress", "In Review", "Fixed"],
  status: "",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: new Date().toISOString(),
        ...action.payload,
      });
    },
    clickedTask(state, action) {
      state.status = action.payload;
    },
    addTaskById(state, action) {
      const [removedTask] = state.tasks.splice(action.payload.id, 1);
      if (
        action.payload.id < action.payload.newId &&
        removedTask.status != action.payload.newStatus
      ) {
        action.payload.newId--;
      }
      removedTask.status = action.payload.newStatus;
      state.tasks.splice(action.payload.newId, 0, removedTask);
    },
    clearTasks(state, action) {
      state.tasks = state.tasks.filter(
        (task) => task.status !== action.payload
      );
    },
    swapTitles(state, action) {
      const [removedTitle] = state.titles.splice(action.payload.id, 1)
      state.titles.splice(action.payload.newId, 0, removedTitle);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, clickedTask, addTaskById, clearTasks, swapTitles } =
  taskSlice.actions;

export default taskSlice.reducer;
