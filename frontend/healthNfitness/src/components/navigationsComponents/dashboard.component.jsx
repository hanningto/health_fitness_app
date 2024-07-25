import React from "react";
import { Box, Container, Grid, GridItem, Heading, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SleepChartComponents from './../sleepComponents/sleepChart.components';
import WorkoutDurationChart from "../workoutsComponents/workoutGraph.components";
import WaterIntakeGraph from "../waterIntake/waterIntakeGraph.component";

function Dashboard() {
  const user = localStorage.getItem('user');
  const parsedUser = JSON.parse(user);
  const username = parsedUser.username;

  return (
    <Container maxW="" mt={8} bg="green.50" p={6} borderRadius="md">
      <Heading as="h1" mb={6} textAlign="center">Welcome to Your Dashboard, {username}</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <VStack spacing={4} align="stretch">
            <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
              <Heading as="h3" size="md" mb={2}>Log Your Workouts</Heading>
              <Link as={RouterLink} to="/workout">Log Workout</Link>
            </Box>
            <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
              <Heading as="h3" size="md" mb={2}>Log Your Sleep</Heading>
              <Link as={RouterLink} to="/sleep">Log Sleep</Link>
            </Box>
            <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
              <Heading as="h3" size="md" mb={2}>Log Your Meals</Heading>
              <Link as={RouterLink} to="/meal-log">Log Meal</Link>
            </Box>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing={4} align="stretch">
            <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
              <Heading as="h3" size="md" mb={2}>Log Your Water Intake</Heading>
              <Link as={RouterLink} to="/log-water">Log Water Intake</Link>
            </Box>
            <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
              <Heading as="h3" size="md" mb={2}>Set Your Goals</Heading>
              <Link as={RouterLink} to="/set-goals">Set Goal</Link>
            </Box>
            <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
              <Heading as="h3" size="md" mb={2}>View Your Progress</Heading>
              <Link as={RouterLink} to="/progress">View Progress</Link>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={6}>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
            <Heading as="h3" size="md" mb={2}>Workout Graph</Heading>
            <WorkoutDurationChart/>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
            <Heading as="h3" size="md" mb={2}>Sleep Graph</Heading>
            <SleepChartComponents />
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
            <Heading as="h3" size="md" mb={2}>Meal Graph</Heading>
            {/* Insert Meal Graph Component Here */}
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
            <Heading as="h3" size="md" mb={2}>Water Intake Graph</Heading>
            <WaterIntakeGraph/>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.200">
            <Heading as="h3" size="md" mb={2}>Goals Progress Graph</Heading>
            {/* Insert Goals Progress Graph Component Here */}
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Dashboard;
