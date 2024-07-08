import React, { useState } from "react";
import "./App.css"
import LoginComponent from "./components/login.component";
import RegistrationComponent from "./components/registration.component";
import WorkoutComponent from "./components/workout.component";

import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Box textAlign="center" fontSize="xl" p={6}>
        <Button onClick={() => setShowLogin(!showLogin)} mb={4}>
          {showLogin ? "Register" : "Login"}
        </Button>
        {showLogin ? <LoginComponent /> : <RegistrationComponent />}
      </Box>
    </>
  );
}

export default App;
