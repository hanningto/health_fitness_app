import React from "react";
import useWorkouts from "../utils/database/dataFetch";

//Styling imports
import { Card, CardHeader, CardBody, Heading, Box } from "@chakra-ui/react";

const WorkoutComponent = () => {
  const { workouts } = useWorkouts();
  return (
    <div>
      <h3>Current Workouts</h3>

      {workouts.map((workout) => (
        <Box key={workout.workout_id}>
          <Card>
            <CardHeader>
              <Heading size="sm">{workout.type}</Heading>
              <p>duration: {workout.duration}</p>
              <p>inensity: {workout.intensity}</p>
              <p>notes: {workout.notes}</p>
            </CardHeader>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default WorkoutComponent;
