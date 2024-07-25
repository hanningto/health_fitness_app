import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  VStack,
  Heading,
  Text,
  Progress,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

const GoalProgressComponent = () => {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("http://127.0.0.1:3000/api/progress-details",{ userId:1});
        setProgressData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProgressData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }


console.log(progressData)


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

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Goal Progress
      </Heading>
      <VStack spacing={4}>
        {progressData.map((goal) => (
          <Box key={goal.goal_id} w="full" p={4} borderWidth={1} borderRadius="lg">
            <Heading as="h2" size="md" mb={2}>
              {goal.goal_type}
            </Heading>
            <Text mb={2}>Target Value: {goal.target_value}</Text>
            <Text mb={2}>Current Progress: {goal.current_progress}</Text>
            <CircularProgress value={(goal.current_progress / goal.target_value) * 100} color='green.400' size='120px' thickness='15px'>
  <CircularProgressLabel>{((goal.current_progress / goal.target_value) * 100).toFixed(1)}%</CircularProgressLabel>
</CircularProgress>

          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default GoalProgressComponent;
