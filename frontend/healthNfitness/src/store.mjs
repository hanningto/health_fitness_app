import { configureStore } from "@reduxjs/toolkit"
import  userReducer from './features/user/userSlice'
import goalsReducer from './features/goal/goalSlice'
import mealsReducer from './features/meals/mealsSlice'
import workoutsReducer from './features/wokouts/workoutSlice'
import sleepsReducer from './features/sleep/sleepSlice'
import waterIntakeSlice from "./features/waterIntake/waterIntakeSlice"


const store = configureStore({
    reducer: {
        user: userReducer,
        goal: goalsReducer,
        meals: mealsReducer,
        workouts: workoutsReducer,
        sleeps: sleepsReducer,
        waterIntake: waterIntakeSlice
    }
})

export default store