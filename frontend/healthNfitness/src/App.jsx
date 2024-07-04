import LoginComponent from "./components/login.component";
import WorkoutComponent from "./components/workout.component";

import { Flex, Spacer, Box } from "@chakra-ui/react";
function App() {
  return (<>
<Flex >
    <Box borderRadius="10px" bg="green" w="300px" >
<h1>Dashboard</h1>
  </Box>

  <Box justifyContent="center" padding="20px">
  <WorkoutComponent />
  <LoginComponent/>
</Box>
</Flex>
  

  </>

) 
}

export default App;
