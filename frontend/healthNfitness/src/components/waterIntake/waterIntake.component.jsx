import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
  SimpleGrid,
  Flex
} from "@chakra-ui/react";
import axios from "axios";
import DisplayWaterIntakeComponent from "./waterIntakeDisplay.component";
import { useDispatch, useSelector } from "react-redux";
import { addWaterIntakeFailure, addWaterIntakeStart, addWaterIntakeSuccess } from "../../features/waterIntake/waterIntakeSlice";

const LogWaterIntake = () => {
  const dispatch = useDispatch();
  const { waterIntake } = useSelector((state) => state.waterIntake);
  const [intakeDate, setIntakeDate] = useState("");
  const [intakeAmount, setIntakeAmount] = useState("");
  const toast = useToast();

  const userdata = localStorage.getItem("user");
  const parsedData = JSON.parse(userdata);
  const userId = parsedData.user_id;

  const handleSubmit = async (e) => {
    e.preventDefault(addWaterIntakeStart());
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
      if (response.status === 201) {
        dispatch(addWaterIntakeSuccess(response.data));
        toast({
          title: "Intake logged.",
          description: "Your water intake has been logged successfully.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setIntakeDate("");
        setIntakeAmount("");
      }
    } catch (error) {
      dispatch(addWaterIntakeFailure(error.error));
      console.log(error);
    }
  };

  return (
    <Box p={5} bg="gray.50" borderRadius="md" boxShadow="md">
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Log Water Intake
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
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
              <FormControl id="intake-amount" border="none" isRequired>
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
        <Box>
          <DisplayWaterIntakeComponent />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default LogWaterIntake;
