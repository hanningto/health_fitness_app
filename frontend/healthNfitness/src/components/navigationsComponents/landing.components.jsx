import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Stack,
  Flex,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Ensure the path to the image is correct and replace 'fit.jpg' with the correct file name
import fit from "../../assets/photos";

const LandingPage = () => {
  return (
    <Box>
      <Box as="nav" bg="teal.500" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              FitLife
            </Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/">
                Home
              </Link>
              <Link as={RouterLink} to="/features">
                Features
              </Link>
              <Link as={RouterLink} to="/contact">
                Contact
              </Link>
              <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline">
                Login
              </Button>
              <Button as={RouterLink} to="/register" colorScheme="teal" variant="solid">
                Sign Up
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box
        bgImage={`url(${fit})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white"
        py={20}
        textAlign="center"
      >
        <Container maxW="container.lg">
          <VStack spacing={8}>
            <Heading as="h1" size="2xl" mb={4}>
              Welcome to FitLife
            </Heading>
            <Text fontSize="1.7em" mb={6}>
              Your journey to a healthier life starts here. Track your workouts,
              monitor your nutrition, and achieve your fitness goals with FitLife.
            </Text>
            <HStack spacing={4} justifyContent="center">
              <Button as={RouterLink} to="/login" colorScheme="teal" size="lg">
                Login
              </Button>
              <Button as={RouterLink} to="/register" colorScheme="blue" size="lg">
                Sign Up
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center" justify="center">
          <Image
            src={fit}
            alt="Fitness App Screenshot"
            borderRadius="md"
            boxShadow="md"
          />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">
              Track Your Progress
            </Heading>
            <Text fontSize="md" color="gray.600">
              Keep an eye on your workouts, meals, and sleep. FitLife helps
              you stay on track with detailed logs and progress charts.
            </Text>
            <Heading as="h2" size="lg">
              Personalized Goals
            </Heading>
            <Text fontSize="md" color="gray.600">
              Set your fitness goals and achieve them with personalized plans
              and reminders. FitLife is here to support you every step of the
              way.
            </Text>
          </VStack>
        </Stack>
      </Container>

      <Box bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h2" size="lg" mb={4}>
            Join the FitLife Community
          </Heading>
          <Text fontSize="md" color="gray.600" mb={6}>
            Connect with other fitness enthusiasts, share your progress, and get
            motivated to achieve more.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
