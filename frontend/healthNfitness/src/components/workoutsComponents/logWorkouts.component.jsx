import React, { useState } from "react";
import {
  VStack,
  Heading,
  Box,
  FormControl,
  Input,
  FormLabel,
  Select,
  Button,
  Textarea,
  Stack,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import DisplayWorkoutsComponent from "./workoutDisplay.component.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addWorkoutFailure, addWorkoutStart, addWorkoutSuccess } from "../../features/wokouts/workoutSlice.js";

const LogWorkoutsComponent = () => {
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state.workouts);
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addWorkoutStart());
    setLoading(true);
    setError(null);

    const userdata = localStorage.getItem("user");
    const parsedData = JSON.parse(userdata);
    const userId = parsedData.user_id;

    const workoutLog = {
      userId,
      type,
      duration,
      intensity,
      notes,
    };

    try {
      const response = await axios.post("http://127.0.0.1:3000/api/workouts", workoutLog);
      setType("");
      setDuration("");
      setIntensity("");
      setNotes("");

      if (response.status === 201) {
        dispatch(addWorkoutSuccess(response.data));
        toast({
          title: "Workout logged.",
          description: "Your workout has been logged successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      dispatch(addWorkoutFailure(error.message));
      setError(error.response ? error.response.data : "Workout log failed");
      toast({
        title: "Error logging workout.",
        description: error.response ? error.response.data : "Workout log failed.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex width="full" height="100vh" p={6} alignItems="flex-start" justifyContent="center" flexDirection={{ base: "column", md: "row" }} gap={6}>
      <Box width={{ base: "full", md: "60%" }} p={6} borderWidth={1} borderRadius="lg">
        <Heading as="h1" size="lg" mb={6}>
          Log Your Workout
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="type" isRequired>
              <FormLabel>Workout Type</FormLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)} placeholder="Select Type">
                <option value="Running">Running</option>
                <option value="Cycling">Cycling</option>
                <option value="Swimming">Swimming</option>
              </Select>
            </FormControl>
            <FormControl id="duration" isRequired>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </FormControl>
            <FormControl id="intensity" isRequired>
              <FormLabel>Intensity</FormLabel>
              <Select value={intensity} onChange={(e) => setIntensity(e.target.value)} placeholder="Select Intensity">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Select>
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Notes</FormLabel>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            <Button type="submit" colorScheme="teal" size="md" width="full" isLoading={loading}>
              Log Workout
            </Button>
          </VStack>
        </form>
      </Box>
      <Box width={{ base: "full", md: "40%" }}>
        <DisplayWorkoutsComponent />
      </Box>
    </Flex>
  );
};

export default LogWorkoutsComponent;
