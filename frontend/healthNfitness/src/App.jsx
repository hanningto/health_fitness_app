import React, { useState } from "react";
// import "./App.css";
import LoginComponent from "./components/navigationsComponents/login.component";
import RegistrationComponent from "./components/navigationsComponents/registration.component";
import WorkoutComponent from "./components/workoutsComponents/logWorkouts.component";
import {
  BrowserRouter as Router,
  Route,
 Routes,
  Navigate,
} from "react-router-dom";

import LogWorkoutsComponent from "./components/workoutsComponents/logWorkouts.component";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/navigationsComponents/dashboard.component";
import MealLogForm from "./components/mealsComponents/mealsLog.component";
import LogWaterIntake from "./components/waterIntake/waterIntake.component";
import LogSleep from "./components/sleepComponents/sleep.component";
import GoalSetting from "./components/goalsComponents/setGoals.component";
import { useSelector } from "react-redux";
import NavigationDrawer from "./components/navigationsComponents/Drawer.component";
import GoalProgressComponent from "./components/progressComponents/progress.component";
import { UiTest } from "./components/workoutsComponents/wotkoutTest";
import Navbar from "./components/navigationsComponents/nav.component";
import LandingPage from "./components/navigationsComponents/landing.components";




function App() {
const {authenticated} = useSelector((state) => state.user)

  // const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Router>
      <NavigationDrawer isAuthenticated={authenticated} />
      <Navbar isAuthenticated={authenticated}/>
          <Routes>
            
            <Route path="/" Component={LandingPage} />
            <Route path="/register" Component={RegistrationComponent} />
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
            <Route path="/UItest" Component={UiTest}/>

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