import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

function MealLogForm() {
  const [mealDate, setMealDate] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [foodType, setFoodType] = useState("");
  const [calories, setCalories] = useState("");
  const [notes, setNotes] = useState("");

  const userdata = localStorage.getItem("user");
  const parsedData = JSON.parse(userdata);
  const userId = parsedData.user_id

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(mealDate)
console.log(typeof(mealDate))
    try {
      const response = await axios.post("http://localhost:3000/api/meals", {
        userId: userId,
        mealDate: mealDate,
        mealTime: mealTime,
        foodType: foodType,
        calories: parseInt(calories), // Ensure calories is parsed as an integer
        notes: notes,
      });

      if (response.status === 201) {
        console.log("Meal logged successfully!");
        // Optionally reset form fields or show success message
      }
    } catch (error) {
      console.error("Error logging meal:", error);
      // Handle error state or show error message to user
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Log Your Meal
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="mealDate" isRequired>
            <FormLabel>Meal Date</FormLabel>
            <Input
              type="date"
              value={mealDate}
              onChange={(e) => setMealDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="mealTime" isRequired>
            <FormLabel>Meal Time</FormLabel>
            <Input
              type="time"
              value={mealTime}
              onChange={(e) => setMealTime(e.target.value)}
            />
          </FormControl>
          <FormControl id="foodType" isRequired>
            <FormLabel>Food Type</FormLabel>
            <Input
              type="text"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            />
          </FormControl>
          <FormControl id="calories" isRequired>
            <FormLabel>Calories</FormLabel>
            <Input
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
          <Button type="submit" colorScheme="teal" size="md" width="full">
            Log Meal
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default MealLogForm;
