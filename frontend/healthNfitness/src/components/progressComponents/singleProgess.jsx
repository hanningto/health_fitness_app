import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  VStack,
  Heading,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

const GoalProgressComponent = ({ goalId }) => {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://127.0.0.1:3000/api/progress-details/${goalId}`);
        setProgressData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProgressData();
  }, [goalId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error fetching progress data</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </Box>
    );
  }

  if (!progressData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Text>No progress data available</Text>
      </Box>
    );
  }

  const { goal_type, target_value, current_progress } = progressData;
  console.log(`this the progress value ${progressData}`)

  return (
    <Box maxW="md" mx="auto"   borderWidth={0} borderRadius="lg">
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Goal Progress
      </Heading>
      <VStack spacing={4}>
        <Box w="full" p={4} borderWidth={1} borderRadius="lg">
          {/* <Heading as="h2" size="md" mb={2}>
            {goal_type}
          </Heading> */}
          {/* <Text mb={2}>Target Value: {target_value}</Text>
          <Text mb={2}>Current Progress: {current_progress}</Text> */}
          <CircularProgress
            value={(current_progress / target_value) * 100}
            color="green.400"
            size="120px"
            thickness="15px"
          >
            <CircularProgressLabel>
              {((current_progress / target_value) * 100).toFixed(1)}%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </VStack>
    </Box>
  );
};

export default GoalProgressComponent;
