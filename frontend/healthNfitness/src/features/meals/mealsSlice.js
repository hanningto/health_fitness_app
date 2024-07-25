import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  loading: false,
  error: null,
  editing: false,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    fetchMealsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMealsSuccess(state, action) {
      state.meals = action.payload;
      state.loading = false;
    },
    fetchMealsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateMealStart(state) {
      state.loading = true;
      state.error = null;
      state.editing = true;
    },
    updateMealSuccess(state, action) {
      const updatedMeals = action.payload;
      state.meals = state.meals.map(
        (meal) =>
          updatedMeals.find(
            (updatedMeal) => updatedMeal.meal_id === meal.meal_id
          ) || meal
      );
      state.loading = false;
      state.editing = false;
    },
    updateMealFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.editing = false;
    },
    addMealStart(state) {
      state.loading = true;
      state.error = null;
    },
    addMealSuccess(state, action) {
      state.meals.push(action.payload);
      state.loading = false;
    },
    addMealFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteMealStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteMealSuccess(state, action) {
      state.meals = state.meals.filter(
        (meal) => meal.meal_id !== action.payload
      );
      state.loading = false;
    },
    deleteMealFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export const {
    fetchMealsStart,
    fetchMealsSuccess,
    fetchMealsFailure,
    updateMealStart,
    updateMealSuccess,
    updateMealFailure,
    addMealStart,
    addMealSuccess,
    addMealFailure,
    deleteMealStart,
    deleteMealSuccess,
    deleteMealFailure,
} = mealsSlice.actions


export default mealsSlice.reducer