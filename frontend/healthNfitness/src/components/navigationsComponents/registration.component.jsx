import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
  Flex,
  Image,
} from "@chakra-ui/react";
import axios from "axios";

const RegistrationComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:3000/api/register", {
        username: username,
        password: password,
        email: email,
      });

      if (response.statusText === "OK") {
        alert("Registration successful");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert("Registration error: " + error.message);
    }
  };

  return (
    <Flex
      height="100vh"
      bg="gray.100"
      align="center"
      justify="center"
      p={4}
    >
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="center"
        maxW="1200px"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        overflow="hidden"
        width="100%"
      >
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImage="url('path-to-your-image.jpg')"
          bgSize="cover"
          bgPosition="center"
          height="100%"
          maxW="50%"
        >
          {/* Optional: Add overlay if needed */}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.3)"
          />
        </Box>

        <Box
          flex="1"
          p={8}
          maxW="500px"
          width="100%"
          bg="white"
        >
          <Heading as="h1" size="lg" mb={6} textAlign="center">
            Register
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel fontSize="1.2em">Username</FormLabel>
                <Input
                  fontSize="1.2em"
                  height="50px"
                  variant="outline"
                  borderRadius="md"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel fontSize="1.2em">Email</FormLabel>
                <Input
                  fontSize="1.2em"
                  height="50px"
                  variant="outline"
                  borderRadius="md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel fontSize="1.2em">Password</FormLabel>
                <Input
                  fontSize="1.2em"
                  height="50px"
                  variant="outline"
                  borderRadius="md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                width="full"
              >
                Register
              </Button>
              <Text mt={4} fontSize="1em" textAlign="center">
                Already have an account?{" "}
                <ChakraLink color="teal.500" as={ReactRouterLink} to="/login">
                  Login
                </ChakraLink>
              </Text>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RegistrationComponent;
