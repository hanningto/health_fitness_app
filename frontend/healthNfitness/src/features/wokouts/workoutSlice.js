import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
  loading: false,
  error: null,
  editing: false,
};

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    fetchWorkoutsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWorkoutsSuccess(state, action) {
      state.workouts = action.payload;
      state.loading = false;
    },
    fetchWorkoutsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateWorkoutStart(state) {
      state.loading = true;
      state.error = null;
      state.editing = true;
    },
    updateWorkoutSuccess(state, action) {
      const updatedMeals = action.payload;
      state.workouts = state.workouts.map(
        (Workout) =>
          updatedMeals.find(
            (updatedMeal) => updatedMeal.workout_id === Workout.workout_id
          ) || Workout
      );
      state.loading = false;
      state.editing = false;
    },
    updateWorkoutFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.editing = false;
    },
    addWorkoutStart(state) {
      state.loading = true;
      state.error = null;
    },
    addWorkoutSuccess(state, action) {
      state.workouts.push(action.payload);
      state.loading = false;
    },
    addWorkoutFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteWorkoutsStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteWorkoutSuccess(state, action) {
      state.workouts = state.workouts.filter(
        (Workout) => Workout.workout_id !== action.payload
      );
      state.loading = false;
    },
    deleteWorkoutFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export const {
    fetchWorkoutsStart,
    fetchWorkoutsSuccess,
    fetchWorkoutsFailure,
    updateWorkoutStart,
    updateWorkoutSuccess,
    updateWorkoutFailure,
    addWorkoutStart,
    addWorkoutSuccess,
    addWorkoutFailure,
    deleteWorkoutsStart,
    deleteWorkoutSuccess,
    deleteWorkoutFailure,
} = workoutsSlice.actions


export default workoutsSlice.reducer