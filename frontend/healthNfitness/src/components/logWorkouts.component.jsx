import React, { useState } from "react";
import {
  VStack,
  Heading,
  Box,
  FormControl,
  Input,
  FormLabel,
  interactivity,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
const LogWorkoutsComponent = () => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    //getting user data
    const userdata = localStorage.getItem("user");
    const parsedData = JSON.parse(userdata);
    const userId = parsedData.user_id
    console.log(userId)
    
    const workoutLog = {
      userId: userId,
      type: type,
      duration: duration,
      Intensity: intensity,
      notes: notes,
    };

    try {
      console.log(type)
      const response = await axios.post("http://127.0.0.1:3000/api/workouts", workoutLog
        // {
        //   userId: userId,
        //   type: type,
        //   duration: duration,
        //   Intensity: intensity,
        //   notes: notes,
        // }
      );
      // reset all the filds c
      setType("");
      setDuration("");
      setIntensity("");
      setNotes("");


      const res = response.data
      console.log(res)
    } catch (error) {
      setError(error.response ? error.response.data : "Workout log failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box width="1423px" height="1004px" alignItems="center" pl="162" pr="160">
      <Box width="1360px" height="806px" >
        <Box width="960" height="72px">
          <Heading fontStyle="Inter" fontSize="32px" width="288px" height="40px" as="h1" size="lg" mb={6}>
            Log Your Workout
          </Heading>
        </Box>
        <Box>
          <Icon as=""/>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="type" isRequired>
              <FormLabel>Workout Type</FormLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Select Type</option>
                <option value="Running">Running</option>
                <option value="Cycling">Cycling</option>
                <option value="Swimming">Swimming</option>
              </Select>
            </FormControl>
            <FormControl id="duration" isRequired>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </FormControl>
            <FormControl id="intensity" isRequired>
              <FormLabel>Intensity</FormLabel>
              <Select
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
              >
                <option value="">Select Intensity</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Select>
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Notes</FormLabel>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormControl>
            {error && <Box color="red.500">{error}</Box>}
            <Button
              type="submit"
              colorScheme="teal"
              size="md"
              width="full"
              isLoading={loading}
            >
              Log Workout
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LogWorkoutsComponent;
