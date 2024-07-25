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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Link as ChakraLink,
  Flex,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginSuccess,
  startLoading,
} from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle Form Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(startLoading());

    try {
      const response = await axios.post("http://127.0.0.1:3000/api/login", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        const { token, user, message } = await response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess(user));
        navigate("/dashboard");
      } else if (response.status === 400) {
        const { error } = await response.data;
        dispatch(loginFailure(error.error));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
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
          bgImage="url('path-to-your-photo.jpg')"
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
            Login
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
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle mr={2}>Login Failed!</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                width="full"
                isLoading={loading}
              >
                Login
              </Button>
            </VStack>
          </form>
          <Text mt={4} fontSize="1em" textAlign="center">
            Don't have an account?{" "}
            <ChakraLink color="teal.500" as={ReactRouterLink} to="/register">
              Sign Up
            </ChakraLink>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default LoginComponent;
