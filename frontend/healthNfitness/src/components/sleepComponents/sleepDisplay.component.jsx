import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import {
  deleteSleepFailure,
  deleteSleepStart,
  deleteSleepSuccess,
  fetchSleepsFailure,
  fetchSleepsStart,
  fetchSleepsSuccess,
} from "../../features/sleep/sleepSlice";
import SleepPopover from "./sleepPopover.component";

function DisplaySleepsComponent() {
  const dispatch = useDispatch();
  const { sleeps, error } = useSelector((state) => state.sleeps);

  useEffect(() => {
    const fetchSleeps = async () => {
      dispatch(fetchSleepsStart());
      try {
        const response = await axios.get(`http://localhost:3000/api/sleep`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(fetchSleepsSuccess(response.data));
        console.log("inside food ");
        console.log(response.data);
      } catch (error) {
        dispatch(fetchSleepsFailure(error.message));
        console.log(error);
      }
    };
    fetchSleeps();
  }, [dispatch]);

  const handleDelete = async (sleep_id) => {
    console.log("deleting");
    console.log(`sleep id ${sleep_id}`);
    dispatch(deleteSleepStart(sleep_id));

    try {
      const response = await axios.delete(
        `http://127.0.0.1:3000/api/sleep/${sleep_id}`
      );
      if (response.status === 200) {
        dispatch(deleteSleepSuccess(sleep_id));
        console.log("delete successfull");
      }
    } catch (error) {
      dispatch(deleteSleepFailure(error.message));
      console.log(error.message);
    }
  };

  return (
    <Box p={5} bg="gray.50" width="1000px" borderRadius="md" boxShadow="md">
      <Heading textAlign="center" mb={6} color="teal.600">
        Your Sleep Logs
      </Heading>
      {sleeps.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {sleeps.map((sleep) => {
            const sleepDateTime = new Date(sleep.sleep_date);
            const sleepDate = sleepDateTime.toLocaleDateString();
            return (
              <Card
                border="1px"
                borderRadius="lg"
                borderColor="teal.200"
                bg="white"
                key={sleep.sleep_id}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                <CardHeader bg="teal.50" borderBottom="1px" borderColor="teal.200">
                  <Heading size="md" color="teal.700">
                    Sleep Date: {sleepDate}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text fontSize="1.2em" color="gray.700">
                    Duration: {sleep.sleep_duration} hours
                  </Text>
                  <Box mt={4}>
                    <Heading size="sm" color="teal.600">
                      Notes
                    </Heading>
                    <Text color="gray.600">{sleep.notes}</Text>
                  </Box>
                  <SleepPopover sleepId={sleep.sleep_id} />
                  <Button
                    mt={4}
                    colorScheme="red"
                    onClick={() => handleDelete(sleep.sleep_id)}
                  >
                    Delete
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      ) : (
        <Text>No sleep logs yet</Text>
      )}
    </Box>
  );
}

export default DisplaySleepsComponent;
