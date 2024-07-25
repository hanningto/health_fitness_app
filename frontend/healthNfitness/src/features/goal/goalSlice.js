import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  loading: false,
  error: null,
  editing: false,
};

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    fetchGoalsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchGoalsSuccess(state, action) {
      state.goals = action.payload;
      state.loading = false;
    },
    fetchGoalsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateGoalStart(state) {
      state.loading = true;
      state.editing = true
      state.error = null;
    },
    updateGoalSuccess(state, action) {
      const updatedGoals = action.payload;
      state.goals = state.goals.map(
        (goal) =>
          updatedGoals.find(
            (updatedGoal) => updatedGoal.goal_id === goal.goal_id
          ) || goal
      );
      state.loading = false;
      state.editing = false
    },
    updateGoalFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.editing = false
    },
    addGoalStart(state) {
      state.loading = true;
      state.error = null;
    },
    addGoalSuccess(state, action) {
      state.goals.push(action.payload);
      state.loading = false;
    },
    addGoalFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteGoalStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteGoalSuccess(state, action) {
      state.goals = state.goals.filter(
        (goal) => goal.goal_id !== action.payload
      );
      state.loading = false;
    },
    deleteGoalFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchGoalsStart,
  fetchGoalsSuccess,
  fetchGoalsFailure,
  updateGoalStart,
  updateGoalSuccess,
  updateGoalFailure,
  addGoalStart,
  addGoalSuccess,
  addGoalFailure,
  deleteGoalStart,
  deleteGoalSuccess,
  deleteGoalFailure,
} = goalSlice.actions;

export default goalSlice.reducer;
