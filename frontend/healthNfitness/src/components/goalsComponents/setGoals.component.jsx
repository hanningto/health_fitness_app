import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addGoalFailure, addGoalStart, addGoalSuccess } from "../../features/goal/goalSlice";
import UpdateGoalComponent from "./goalsEditingBox.Component";
import DisplayGoalsComponent from "./displayGoals.component";

function GoalSetting() {
  const dispatch = useDispatch();
  const { goals, editing } = useSelector((state) => state.goal);

  const [goalType, setGoalType] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const userId = 1; // Replace with the actual user ID from your authentication logic

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addGoalStart());

    try {
      const response = await axios.post("http://127.0.0.1:3000/api/goals", {
        user_id: userId,
        goal_type: goalType,
        target_value: parseInt(targetValue),
        start_date: startDate,
        end_date: endDate,
      });
      setGoalType("");
      setTargetValue("");
      setStartDate("");
      setEndDate("");
      if (response.status === 201) {
        dispatch(addGoalSuccess(response.data));
      }
    } catch (error) {
      dispatch(addGoalFailure(error.message));
      setError("Failed to set goal");
    }
  };

  return (
    <Box
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      bg="green.50"
    >
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Set a New Goal
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Box
            p={6}
            borderWidth={1}
            borderRadius="lg"
            bg="white"
            shadow="md"
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="goalType" isRequired>
                  <FormLabel>Goal Type</FormLabel>
                  <Input
                    type="text"
                    value={goalType}
                    onChange={(e) => setGoalType(e.target.value)}
                    bg="gray.50"
                  />
                </FormControl>
                <FormControl id="targetValue" isRequired>
                  <FormLabel>Target Value</FormLabel>
                  <Input
                    type="number"
                    value={targetValue}
                    onChange={(e) => setTargetValue(e.target.value)}
                    bg="gray.50"
                  />
                </FormControl>
                <FormControl id="startDate" isRequired>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    bg="gray.50"
                  />
                </FormControl>
                <FormControl id="endDate" isRequired>
                  <FormLabel>End Date</FormLabel>
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    bg="gray.50"
                  />
                </FormControl>
                {error && <Text color="red.500">{error}</Text>}
                <Button type="submit" colorScheme="teal" size="md" width="full">
                  Set Goal
                </Button>
              </VStack>
            </form>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p={6}
            borderWidth={1}
            borderRadius="lg"
            bg="white"
            shadow="md"
            maxH="full"
            overflowY="auto"
          >
            {isEditing ? (
              <UpdateGoalComponent />
            ) : (
              <DisplayGoalsComponent goals={goals} />
            )}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default GoalSetting;
