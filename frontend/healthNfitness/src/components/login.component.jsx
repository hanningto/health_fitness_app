import React from "react";
import { useState } from "react";

import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from '@chakra-ui/react';
import axios from "axios";

function LoginComponent({ onLogin}) {

    const {username, setUsername} = useState('')
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')

    //Handle Form Submit
    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await axios('/api_endopint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password, email })
        })
    if (response.ok){
        const data = await response.json();
        onLogin(data.token);
    }
    else{
        // Erro Handling
        alart('Login failed')
        alart('')
    }

    }




  return (
    <div>
  <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h1" size="lg" mb={6} textAlign="center">Login</Heading>
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
              onChange={(e) => setPassword(e.target.value)}
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
