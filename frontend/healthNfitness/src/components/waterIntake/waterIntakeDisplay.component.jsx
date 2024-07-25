import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, Button } from "@chakra-ui/react";
import axios from "axios";
import { deleteWaterIntakeFailure, deleteWaterIntakeStart, deleteWaterIntakeSuccess, fetchWaterIntakeFailure, fetchWaterIntakeStart, fetchWaterIntakeSuccess } from "../../features/waterIntake/waterIntakeSlice";

function DisplayWaterIntakeComponent() {
  const dispatch = useDispatch();
  const { waterIntake, error } = useSelector((state) => state.waterIntake);

  useEffect(() => {
    const fetchWaterIntake = async () => {
      dispatch(fetchWaterIntakeStart());
      try {
        const response = await axios.get(`http://localhost:3000/api/water`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(fetchWaterIntakeSuccess(response.data));
        console.log(response.data)
      } catch (error) {
        dispatch(fetchWaterIntakeFailure(error.message));
        console.log(error)
      }
    };
    fetchWaterIntake();
  }, [dispatch]);

  const handleDelete = async(intake_id) => {
    dispatch(deleteWaterIntakeStart(intake_id))

    try {
        const response = await axios.delete(`http://127.0.0.1:3000/api/water/${intake_id}`)
        if(response.status === 200){
            dispatch(deleteWaterIntakeSuccess(intake_id));
        }
    } catch (error) {
        dispatch(deleteWaterIntakeFailure(error.message))
        console.log(error.error)
    }
  }

  return (
    <Box id="meal_display" p={6}>
      <Heading textAlign="center" mb={6}>Your Water Intake Logs</Heading>
      {waterIntake.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {waterIntake.map((intake) => {
            const intakeTimeDate = new Date(intake.intake_date);
            const intakeDate = intakeTimeDate.toLocaleDateString();
            return (
              <Card
                border="2px"
                borderRadius="10px"
                key={intake.intake_id}
                bg="white"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                <CardHeader bg="teal.500" color="white" borderTopRadius="10px">
                  <Heading size="md">Water Intake</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontSize="1.2em" mb={2}><strong>Date:</strong> {intakeDate}</Text>
                  <Text fontSize="1.2em" mb={4}><strong>Amount:</strong> {intake.intake_amount} ml</Text>
                  <Button colorScheme="red" onClick={() => handleDelete(intake.intake_id)}>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      ) : (
        <Text textAlign="center">No water intake logs yet.</Text>
      )}
    </Box>
  );
}

export default DisplayWaterIntakeComponent;
