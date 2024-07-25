import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sleeps: [],
  loading: false,
  error: null,
  editing: false,
};

const sleepsSlice = createSlice({
  name: "sleeps",
  initialState,
  reducers: {
    fetchSleepsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSleepsSuccess(state, action) {
      state.sleeps = action.payload;
      state.loading = false;
    },
    fetchSleepsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateSleepStart(state) {
      state.loading = true;
      state.error = null;
      state.editing = true;
    },
    updateSleepSuccess(state, action) {
      const updatedSleeps = action.payload;
      state.sleeps = state.sleeps.map(
        (sleep) =>
          updatedSleeps.find(
            (updatedSleep) => updatedSleep.sleep_id === sleep.sleep_id
          ) || sleep
      );
      state.loading = false;
      state.editing = false;
    },
    updateSleepFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.editing = false;
    },
    addSleepStart(state) {
      state.loading = true;
      state.error = null;
    },
    addSleepSuccess(state, action) {
      state.sleeps.push(action.payload);
      state.loading = false;
    },
    addSleepFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteSleepStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteSleepSuccess(state, action) {
      state.sleeps = state.sleeps.filter(
        (sleep) => sleep.sleep_id !== action.payload
      );
      state.loading = false;
    },
    deleteSleepFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export const {
    fetchSleepsStart,
    fetchSleepsSuccess,
    fetchSleepsFailure,
    updateSleepStart,
    updateSleepSuccess,
    updateSleepFailure,
    addSleepStart,
    addSleepSuccess,
    addSleepFailure,
    deleteSleepStart,
    deleteSleepSuccess,
    deleteSleepFailure,
} = sleepsSlice.actions


export default sleepsSlice.reducer