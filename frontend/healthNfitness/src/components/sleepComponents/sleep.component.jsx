import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import DisplaySleepsComponent from './sleepDisplay.component';
import SleepChartComponents from './sleepChart.components';

const LogSleep = () => {
  const [sleepDate, setSleepDate] = useState('');
  const [sleepDuration, setSleepDuration] = useState('');
  const [notes, setNotes] = useState('');

  const userdata = localStorage.getItem("user");
  const parsedData = JSON.parse(userdata);
  const userId = parsedData.user_id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sleepData = {
      user_id: userId,
      sleep_date: sleepDate,
      sleep_duration: parseInt(sleepDuration),
      notes: notes,
    };
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/sleep', sleepData);
      if (response.status === 200) {
        setSleepDate('');
        setSleepDuration('');
        setNotes('');
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Log Sleep
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="sleep-date" isRequired>
            <FormLabel>Sleep Date</FormLabel>
            <Input
              type="date"
              value={sleepDate}
              onChange={(e) => setSleepDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="sleep-duration" isRequired>
            <FormLabel>Sleep Duration (hours)</FormLabel>
            <Input
              type="number"
              value={sleepDuration}
              onChange={(e) => setSleepDuration(e.target.value)}
            />
          </FormControl>
          <FormControl id="notes">
            <FormLabel>Notes</FormLabel>
            <Input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="md" width="full">
            Log Sleep
          </Button>
        </VStack>
      </form>
      <Flex>
        <Box><DisplaySleepsComponent/></Box>
        <Box><SleepChartComponents/></Box>
      </Flex>
    </Box>
  );
};

export default LogSleep;
