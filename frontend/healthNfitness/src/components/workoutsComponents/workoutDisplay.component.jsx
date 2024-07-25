import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, Button } from "@chakra-ui/react";
import axios from "axios";
import { deleteWorkoutFailure, deleteWorkoutsStart, deleteWorkoutSuccess, fetchWorkoutsFailure, fetchWorkoutsStart, fetchWorkoutsSuccess } from "../../features/wokouts/workoutSlice";
import WorkoutsPopover from "./workoutPopover.component";

function DisplayWorkoutsComponent() {
  const dispatch = useDispatch();
  const { workouts, error } = useSelector((state) => state.workouts);

  useEffect(() => {
    const fetchWorkouts = async () => {
      dispatch(fetchWorkoutsStart());
      try {
        const response = await axios.get(`http://localhost:3000/api/workouts`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(fetchWorkoutsSuccess(response.data));
        console.log("inside food ")
        console.log(response.data)
      } catch (error) {
        dispatch(fetchWorkoutsFailure(error.message));
        console.log(error)
      }
    };
    fetchWorkouts();
  }, [dispatch]);
console.log(workouts)
  const handleDelete = async(workout_id) => {
    dispatch(deleteWorkoutsStart(workout_id))

    try {
        const response = await axios.delete(`http://127.0.0.1:3000/api/workouts/${workout_id}`)
        if(response.status === 200){
            dispatch(deleteWorkoutSuccess(workout_id));
        }
    } catch (error) {
        dispatch(deleteWorkoutFailure(error.message))
        console.log(error.message)
    }
  }
  return (
    <Box id="meal_display">
      <Heading textAlign="center">Your Workouts</Heading>
      {workouts.length > 0 ? (
        <SimpleGrid columns={2} spacing={10}>
          {workouts.map((workout) => {
            return (
              <Card
                border="2px"
                borderRadius="10px"
                width="350px"
                key={workout.workout_id}
              >
                <CardHeader>
                  <Heading size="md">{workout.type}</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontSize="1.2em">Duration {workout.duration}</Text>
                  <Text fontSize="1.2em">Intetnsity {workout.intensity}</Text>
                  <Box>
                    <Heading fontSize="bold">Notes</Heading>
                    <Text>{workout.notes}</Text>
                  </Box>
                  <WorkoutsPopover workoutId={workout.workout_id}/>
                  <Button color="red" onClick={() => handleDelete(workout.workout_id) }>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      ) : (
        <Text>No workouts yet</Text>
      )}
    </Box>
  );
}

export default DisplayWorkoutsComponent;
