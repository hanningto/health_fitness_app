import React, { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginSuccess,
  startLoading,
} from "../features/user/userSlice";

function LoginComponent() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const [username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  //Handle Form Submit
  const handleSubmit = async (event) => {

    event.preventDefault();
    dispatch(startLoading());

    try {
      const response = await axios.post("http://127.0.0.1:3000/api/login", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        const data = await response.json();
        dispatch(loginSuccess(data));
      } else {
        const errorData = await response.json();
        dispatch(loginFailure(errorData));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div>
      <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
        <Heading as="h1" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </FormControl>
            
            <Button type="submit" colorScheme="teal" size="md" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
}

export default LoginComponent;
