import React, { useState } from "react";
import "./App.css";
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




function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Router>
          <Routes>
            <Route path="/login" Component={LoginComponent} />
            <Route
              path="/workout-log"
              element={<PrivateRoute component={<LogWorkoutsComponent />} />}
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
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
