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
  },
});

// Action creators are generated for each case reducer function
export const { addTask, clickedTask, addTaskById, clearTasks } = taskSlice.actions;

export default taskSlice.reducer;
