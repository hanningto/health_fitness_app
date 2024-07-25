import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteMealFailure,
    deleteMealStart,
  deleteMealSuccess,
  fetchMealsFailure,
  fetchMealsStart,
  fetchMealsSuccess,
} from "../../features/meals/mealsSlice";
import { Box, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, Button } from "@chakra-ui/react";
import axios from "axios";
import MealsPopover from "./mealPopover.component";

function DisplayMealsComponent() {
  const dispatch = useDispatch();
  const { meals, error } = useSelector((state) => state.meals);

  useEffect(() => {
    const fetchMeals = async () => {
      dispatch(fetchMealsStart());
      try {
        const response = await axios.get(`http://localhost:3000/api/meals`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(fetchMealsSuccess(response.data));
        console.log("inside food ")
        console.log(response.data)
      } catch (error) {
        dispatch(fetchMealsFailure(error.message));
        console.log(error)
      }
    };
    fetchMeals();
  }, [dispatch]);

  const handleDelete = async(meal_id) => {
    dispatch(deleteMealStart(meal_id))

    try {
        const response = await axios.delete(`http://127.0.0.1:3000/api/meals/${meal_id}`)
        if(response.status === 200){
            dispatch(deleteMealSuccess(meal_id));
        }
    } catch (error) {
        dispatch(deleteMealFailure(error.message))
        console.log(error.message)
    }
  }
  return (
    <Box id="meal_display">
      <Heading textAlign="center">Your Meals</Heading>
      {meals.length > 0 ? (
        <SimpleGrid columns={2} spacing={10}>
          {meals.map((meal) => {
            const mealDateTime = new Date(meal.meal_time);
            const mealDate = mealDateTime.toLocaleDateString();
            const mealTime = mealDateTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <Card
                border="2px"
                borderRadius="10px"
                width="350px"
                key={meal.meal_id}
              >
                <CardHeader>
                  <Heading size="md">{meal.meal_type}</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontSize="1.2em">Time: {mealTime}</Text>
                  <Text fontSize="1.2em">Date: {mealDate}</Text>
                  <Text fontSize="1.2em">Food Type: {meal.food_type}</Text>
                  <Box>
                    <Heading fontSize="bold">Notes</Heading>
                    <Text>{meal.notes}</Text>
                  </Box>
                <MealsPopover meald={meal.meal_id}/>
                  <Button color="red" onClick={() => handleDelete(meal.meal_id) }>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      ) : (
        <Text>No meals yet</Text>
      )}
    </Box>
  );
}

export default DisplayMealsComponent;
