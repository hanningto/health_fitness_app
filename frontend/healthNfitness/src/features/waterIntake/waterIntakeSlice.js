import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  waterIntake: [],
  loading: false,
  error: null,
  editing: false,
};

const waterIntakeSlice = createSlice({
  name: "waterIntake",
  initialState,
  reducers: {
    fetchWaterIntakeStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWaterIntakeSuccess(state, action) {
      state.waterIntake = action.payload;
      state.loading = false;
    },
    fetchWaterIntakeFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateWaterIntakeStart(state) {
      state.loading = true;
      state.error = null;
      state.editing = true;
    },
    updateWaterIntakeSuccess(state, action) {
      const updatedWaterIntake = action.payload;
      state.waterIntake = state.waterIntake.map(
        (intake) =>
          updatedWaterIntake.find(
            (updatedIntake) => updatedIntake.intake_id === intake.intake_id
          ) || intake
      );
      state.loading = false;
      state.editing = false;
    },
    updateWaterIntakeFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.editing = false;
    },
    addWaterIntakeStart(state) {
      state.loading = true;
      state.error = null;
    },
    addWaterIntakeSuccess(state, action) {
      state.waterIntake.push(action.payload);
      state.loading = false;
    },
    addWaterIntakeFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteWaterIntakeStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteWaterIntakeSuccess(state, action) {
      state.waterIntake = state.waterIntake.filter(
        (intake) => intake.intake_id !== action.payload
      );
      state.loading = false;
    },
    deleteWaterIntakeFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export const {
    fetchWaterIntakeStart,
    fetchWaterIntakeSuccess,
    fetchWaterIntakeFailure,
    updateWaterIntakeStart,
    updateWaterIntakeSuccess,
    updateWaterIntakeFailure,
    addWaterIntakeStart,
    addWaterIntakeSuccess,
    addWaterIntakeFailure,
    deleteWaterIntakeStart,
    deleteWaterIntakeSuccess,
    deleteWaterIntakeFailure,
} = waterIntakeSlice.actions

export default waterIntakeSlice.reducer