import React from "react";
import useWorkouts from "../../utils/database/dataFetch";

//Styling imports
import { Card, CardHeader, CardBody, Heading, Box } from "@chakra-ui/react";

const WorkoutComponent = () => {
  const { workouts } = useWorkouts();
  return (
    <div>

    </div>
  );
};

export default WorkoutComponent;
