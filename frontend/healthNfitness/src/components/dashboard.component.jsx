import React from "react";
import { Box, Container, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Dashboard() {
  return (
    <Container maxW="container.lg" mt={8}>
      <Heading as="h1" mb={4}>Welcome to Your Dashboard</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={2}>Log Your Workouts</Heading>
            <Link as={RouterLink} to="/workout">Log Workout</Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={2}>Log Your Sleep</Heading>
            <Link as={RouterLink} to="/sleep">Log Sleep</Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={2}>Log Your Meals</Heading>
            <Link as={RouterLink} to="/meal-log">Log Meal</Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={2}>Log Your Water Intake</Heading>
            <Link as={RouterLink} to="/log-water">Log Water Intake</Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={2}>Set Your Goals</Heading>
            <Link as={RouterLink} to="/set-goals">Set Goal</Link>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={2}>View Your Progress</Heading>
            <Link as={RouterLink} to="/progress">View Progress</Link>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Dashboard;
