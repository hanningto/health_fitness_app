import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

const LogProgress = ({ goalId, userId }) => {
  const [progressDate, setProgressDate] = useState('');
  const [progressValue, setProgressValue] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const progressData = {
      user_id: userId,
      goal_id: goalId,
      progress_date: progressDate,
      progress_value: parseInt(progressValue),
    };

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/progress', progressData);
      if (response.status === 201) {
        toast({
          title: 'Progress logged.',
          description: 'Your progress has been logged successfully.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        setProgressDate('');
        setProgressValue('');
      }
    } catch (error) {
      toast({
        title: 'Error logging progress.',
        description: error.response?.data?.error || 'An error occurred.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Log Progress
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="progress-date" isRequired>
            <FormLabel>Progress Date</FormLabel>
            <Input
              type="date"
              value={progressDate}
              onChange={(e) => setProgressDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="progress-value" isRequired>
            <FormLabel>Progress Value</FormLabel>
            <Input
              type="number"
              value={progressValue}
              onChange={(e) => setProgressValue(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="md" width="full">
            Log Progress
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LogProgress;
