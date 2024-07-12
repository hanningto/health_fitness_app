import React, { useState, useEffect } from "react";
import "../static/css/goal.css"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Textarea,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

function GoalSetting() {
  const [goalType, setGoalType] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState(null);

  const userId = 1; // Replace with the actual user ID from your authentication logic

  // Fetch goals for the user
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/goals`)
      .then((response) => setGoals(response.data))
      .catch((error) => setError(error.message));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/goals", {
        user_id: userId,
        goal_type: goalType,
        target_value: parseInt(targetValue),
        start_date: startDate,
        end_date: endDate,
      });
      setGoals([...goals, response.data]);
      setGoalType("");
      setTargetValue("");
      setStartDate("");
      setEndDate("");
      setError(null);
    } catch (error) {
      setError("Failed to set goal");
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Set a New Goal
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="goalType" isRequired>
            <FormLabel>Goal Type</FormLabel>
            <Input
              type="text"
              value={goalType}
              onChange={(e) => setGoalType(e.target.value)}
            />
          </FormControl>
          <FormControl id="targetValue" isRequired>
            <FormLabel>Target Value</FormLabel>
            <Input
              type="number"
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
            />
          </FormControl>
          <FormControl id="startDate" isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="endDate" isRequired>
            <FormLabel>End Date</FormLabel>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormControl>
          {error && <Box color="red.500">{error}</Box>}
          <Button type="submit" colorScheme="teal" size="md" width="full">
            Set Goal
          </Button>
        </VStack>
      </form>
      <Box mt={8}>
        <Heading as="h2" size="md" mb={4}>
          Your Goals
        </Heading>
        {goals.length > 0 ? (
          <Stack spacing={4}>
            {goals.map((goal) => (
              <Box key={goal.goal_id} p={4} borderWidth={1} borderRadius="lg">
                <Text>
                  <strong>Type:</strong> {goal.goal_type}
                </Text>
                <Text>
                  <strong>Target:</strong> {goal.target_value}
                </Text>
                <Text>
                  <strong>Start Date:</strong> {new Date(goal.start_date).toLocaleDateString()}
                </Text>
                <Text>
                  <strong>End Date:</strong> {new Date(goal.end_date).toLocaleDateString()}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <Text>No goals set yet.</Text>
        )}
      </Box>
    </Box>
  );
}

export default GoalSetting;
