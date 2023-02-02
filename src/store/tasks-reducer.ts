import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/task";

interface TaskState {
  tasks: Task[];
  status: string;
}

const initialState: TaskState = {
  tasks: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { addTask, clickedTask } = taskSlice.actions;

export default taskSlice.reducer;
