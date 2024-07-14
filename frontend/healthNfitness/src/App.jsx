import React, { useState } from "react";
// import "./App.css";
import LoginComponent from "./components/login.component";
import RegistrationComponent from "./components/registration.component";
import WorkoutComponent from "./components/workout.component";
import {
  BrowserRouter as Router,
  Route,
 Routes,
  Navigate,
} from "react-router-dom";

import LogWorkoutsComponent from "./components/logWorkouts.component";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/dashboard.component";
import MealLogForm from "./components/mealsLog.component";
import LogWaterIntake from "./components/waterIntake.component";
import LogSleep from "./components/sleep.component";
import GoalSetting from "./components/setGoals.component";
import { useSelector } from "react-redux";
import NavigationDrawer from "./components/Drawer.component";
import GoalProgressComponent from "./components/progress.component";




function App() {
const {authenticated} = useSelector((state) => state.user)

  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Router>
      <NavigationDrawer isAuthenticated={authenticated} />
          <Routes>
            
            <Route path="/login" Component={LoginComponent} />
            <Route
              path="/dashboard"
              // element={<PrivateRoute component={<LogWorkoutsComponent />} />}
              element={<PrivateRoute component={<Dashboard />} />}
            />
            <Route path="/workout" Component={LogWorkoutsComponent}/>
            <Route path="/set-goals" Component={GoalSetting}/>
            <Route path="/log-water" Component={LogWaterIntake}/>
            <Route path="/meal-log" Component={MealLogForm}/>
            <Route path="/sleep" Component={LogSleep}/>
            <Route path="/progress" Component={GoalProgressComponent}/>

          </Routes>
      </Router>
    </>
  );
}

export default App;

{
  /* <Box textAlign="center" fontSize="xl" p={6}>
<Button onClick={() => setShowLogin(!showLogin)} mb={4}>
  {showLogin ? "Register" : "Login"}
</Button>
{showLogin ? <LoginComponent /> : <RegistrationComponent />}
<LogWorkoutsComponent/>
</Box> */
}
{/* <Route path="*" element={<Navigate to="/login" replace />} /> */}