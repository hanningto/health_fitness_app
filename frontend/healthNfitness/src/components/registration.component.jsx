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

const RegistrationComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("geting contents", username);
      const response = await axios.post("http://127.0.0.1:3000/api/register", {
        username: username,
        password: password,
        email: email,
      });

      if (response.statusText === "OK") {
       
        alert("Registration successful");
      } else {
         console.log(response)
        alert("Registration failed");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Register
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
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <Button
            type="submit"
            colorScheme="teal"
            size="md"
            width="full"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RegistrationComponent;
