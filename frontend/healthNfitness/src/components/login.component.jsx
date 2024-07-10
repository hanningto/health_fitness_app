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
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        const {token, user, message} = await response.data;
        localStorage.setItem('token', token)
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(loginSuccess(user));
        console.log('redirecting')
        //getting user data
        const userdata = localStorage.getItem('user')
        const parsedData = JSON.parse(userdata)
        console.log(parsedData.username)
        navigate('/dashboard');
      }else if(response.status === 400){
        const {error} = await response.data;
        console.log(error)
        dispatch(loginFailure(error.error));
      }
    } catch (error) {
      console.log(error.mesaage)
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
            {error && <Box color="red.500">{error}</Box>}
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
