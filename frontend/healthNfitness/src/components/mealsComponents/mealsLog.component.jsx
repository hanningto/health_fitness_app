import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Textarea,
  Stack,
  Text,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Select,
  SimpleGrid
} from "@chakra-ui/react";
import axios from "axios";
import "./mealLog.css";
import FoodTypes from "../mealsComponents/foodTypes.components";
import DisplayMealsComponent from "./mealsDisplay.component";
import { useDispatch, useSelector } from "react-redux";
import { addMealFailure, addMealStart, addMealSuccess } from "../../features/meals/mealsSlice";


const FoodTypeOptions = [
  { value: 'Protein', label: 'Protein', description: 'This is the description for Protein ' },
  { value: 'Carbohydrate', label: 'Carbohydrate ', description: 'This is the description for Carbohydrate ' },
  { value: 'Vitamins', label: 'Vitamins ', description: 'This is the description for Vitamins ' },
];

function MealLogForm() {
const dispatch = useDispatch()
const {meals, error} = useSelector((state => state.meals))

  // const [meals, setMeals] = useState("");
  const [mealDate, setMealDate] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [notes, setNotes] = useState("");
  // const [error, setError] = useState("");
  const [selectedFoodType, setSelectedFoodType] = useState(null)

  const userdata = localStorage.getItem("user");
  const parsedData = JSON.parse(userdata);
  const userId = parsedData.user_id;

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/api/meals`)
  //     .then((response) => setMeals(response.data))
  //     .catch((error) => setError(error.message));
  // }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addMealStart())
    console.log(mealDate);
    console.log(typeof mealDate);
    const mealDateTime = new Date(`${mealDate}T${mealTime}`);
    const convertedTime = mealDateTime.toISOString();
    console.log(convertedTime);
    

    try {
      const response = await axios.post("http://localhost:3000/api/meals", {
        userId: userId,
        mealDate: mealDate,
        mealType: meal,
        mealTime: convertedTime,
        foodType: selectedFoodType.value,
        calories: parseInt(calories), // Ensure calories is parsed as an integer
        notes: notes,
      });

      if (response.status === 201) {
        dispatch(addMealSuccess(response.data))
        console.log("Meal logged successfully!");
        // Optionally reset form fields or show success message
      }
    } catch (error) {
      dispatch(addMealFailure(error.message))
      console.error("Error logging meal:", error);
      // Handle error state or show error message to user
    }
  };

  return (
    <Flex id="mainBox" width="" border="2px solid red" flexDirection="row">
      <Box id="meal-log" mt={8} p={6} borderRadius="lg">
        <Heading as="h1" size="lg" mb={6} textAlign="center">
          Log Your Meal
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="mealDate" isRequired>
              <FormLabel>Meal </FormLabel>
              <Input
              variant="flushed"
                type="text"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
              />
            </FormControl>
            <FormControl id="mealDate" isRequired>
              <FormLabel>Meal Date</FormLabel>
              <Input
              variant="flushed"
                type="date"
                value={mealDate}
                onChange={(e) => setMealDate(e.target.value)}
              />
            </FormControl>
            <FormControl id="mealTime" isRequired>
              <FormLabel>Meal Time</FormLabel>
              <Input
               variant="flushed"
                type="time"
                value={mealTime}
                onChange={(e) => setMealTime(e.target.value)}
              />
            </FormControl>
            <FormControl id="foodType" isRequired>
              <FormLabel>Food Type</FormLabel>
              <FoodTypes setSelectedFoodType={setSelectedFoodType} />
            </FormControl>
            <FormControl id="calories" isRequired>
              <FormLabel>Calories</FormLabel>
              <Input
               variant="flushed"
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Notes</FormLabel>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="md" height="50px" width="150px" >
              Log Meal
            </Button>
          </VStack>
        </form>
      </Box>
      <DisplayMealsComponent/>
    </Flex>
  );
}

export default MealLogForm;
