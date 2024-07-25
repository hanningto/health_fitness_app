import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import {
  updateGoalStart,
  updateGoalSuccess,
  updateGoalFailure,
} from '../../features/goal/goalSlice';

const UpdateGoalComponent = ({ goalId }) => {
  const dispatch = useDispatch();
  const { goals } = useSelector((state) => state.goal);
  const goal = goals.find((goal) => goal.goal_id === goalId);

  const [goalType, setGoalType] = useState(goal ? goal.goal_type : '');
  const [targetValue, setTargetValue] = useState(goal ? goal.target_value : '');
  const [startDate, setStartDate] = useState(goal ? goal.start_date.split('T')[0] : '');
  const [endDate, setEndDate] = useState(goal ? goal.end_date.split('T')[0] : '');

  useEffect(() => {
    if (goal) {
      setGoalType(goal.goal_type);
      setTargetValue(goal.target_value);
      setStartDate(goal.start_date.split('T')[0]);
      setEndDate(goal.end_date.split('T')[0]);
    }
  }, [goal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateGoalStart());
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/goals/${goalId}`,
        {
          goal_type: goalType,
          target_value: targetValue,
          start_date: startDate,
          end_date: endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(response.data)
      if (response.status === 200) {
        dispatch(updateGoalSuccess(response.data));
      }
    } catch (error) {
      dispatch(updateGoalFailure(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={goalType}
        onChange={(e) => setGoalType(e.target.value)}
        placeholder="Goal Type"
      />
      <Input
        type="number"
        value={targetValue}
        onChange={(e) => setTargetValue(e.target.value)}
        placeholder="Target Value"
      />
      <Input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Button  type="submit">Update Goal</Button>
    </form>
  );
};

export default UpdateGoalComponent;
