import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import { updateGoalSuccess } from '../../features/goal/goalSlice';
import {updateMealStart, updateMealFailure, updateMealSuccess } from '../../features/meals/mealsSlice';

const UpdateMealComponent = ({ mealId }) => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);
  const meal = meals.find((meal) => meal.meal_id === mealId);
  console.log(mealId)

  const [mealType, setMealType] = useState(meal ? meal.meal_type : '');
  const [mealDate, setMealDate] = useState(meal ? meal.meal_date.split('T')[0] : '');
  const [mealTime, setMealTime] = useState(meal ? meal.meal_time : '');
  const [foodType, setFoodType] = useState(meal ? meal.food_type : '');
  const [calories, setCalories] = useState(meal ? meal.calories : '');
  const [notes, setNotes] = useState(meal ? meal.notes : '');

  useEffect(() => {
    if (meal) {
      setMealType(meal.meal_type);
      setMealTime(meal.meal_time);
      setMealDate(meal.meal_date.split('T')[0]);
      setFoodType(meal.food_type);
      setCalories(meal.calories);
      setNotes(meal.notes);
    }
  }, [meal]);
console.log(meals)
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateMealStart());
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/meals/${mealId}`,
        {
          meal_type: mealType,
          meal_time: mealTime,
          meal_date: mealDate,
          food_type: foodType,
          calories: calories,
          notes: notes,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(response.data)
      if (response.status === 200) {
        dispatch(updateMealSuccess(response.data));
      }
    } catch (error) {
      dispatch(updateMealFailure(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        placeholder="Meal Type"
      />
        <Input
          type="date"
          value={mealDate}
          onChange={(e) => setMealDate(e.target.value)}
        />
      <Input
        type="time"
        value={mealTime}
        onChange={(e) => setMealTime(e.target.value)}
        placeholder="Meal time"
      />
      <Input
        type="text"
        value={foodType}
        onChange={(e) => setFoodType(e.target.value)}
        placeholder='Food type'
      />
      <Input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder='calories'
      />
      <Input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder='notes'
      />
      <Button  type="submit">Update Goal</Button>
    </form>
  );
};

export default UpdateMealComponent;
