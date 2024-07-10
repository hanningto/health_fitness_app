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

const LogWaterIntake = () => {
  const [intakeDate, setIntakeDate] = useState("");
  const [intakeAmount, setIntakeAmount] = useState("");
  const [notes, setNotes] = useState("");

  const userdata = localStorage.getItem("user");
  const parsedData = JSON.parse(userdata);
  const userId = parsedData.user_id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const waterData = {
      userId: userId,
      intakeDate: intakeDate,
      intakeAmount: parseInt(intakeAmount),
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/water",
        waterData
      );
      if (response.status === 200) {
        setIntakeDate("");
        setIntakeAmount("");
      } else {
      }
    } catch (error) {
      setSuccess("");
    }
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Log Water Intake
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="intake-date" isRequired>
            <FormLabel>Intake Date</FormLabel>
            <Input
              type="date"
              value={intakeDate}
              onChange={(e) => setIntakeDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="intake-amount" isRequired>
            <FormLabel>Intake Amount (ml)</FormLabel>
            <Input
              type="number"
              value={intakeAmount}
              onChange={(e) => setIntakeAmount(e.target.value)}
            />
          </FormControl>
         
          <Button type="submit" colorScheme="teal" size="md" width="full">
            Log Water Intake
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LogWaterIntake;
