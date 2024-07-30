import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

export const asyncTasks = createAsyncThunk("tasks/asyncTasks", async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: tasks }), 2000)
  );
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
  },
  extraReducers: (build) => {
    build.addCase(asyncTasks.pending, (state) => {
      state.loading = true;
    });
    build.addCase(asyncTasks.fulfilled, (state, action) => {
      state.tasks = action.payload.data;
      state.loading = false;
    });
  },
});
export default tasksSlice.reducer;
