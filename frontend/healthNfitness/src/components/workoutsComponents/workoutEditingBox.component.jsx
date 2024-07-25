import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import { updateWorkoutFailure, updateWorkoutStart, updateWorkoutSuccess } from '../../features/wokouts/workoutSlice';

const UpdateWorkoutComponent = ({ workoutId }) => {
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state.workouts);
  const workout = workouts.find((workout) => workout.workout_id === workoutId);

  const [workoutType, setWorkoutType] = useState(workout ? workout.type : '');
  const [duration, setDuration] = useState(workout ? workout.duration: '');
  const [intesity, setIntensity] = useState(workout ? workout.intesity : '');
  const [notes, setNotes] = useState(workout ? workout.notes : '');

  useEffect(() => {
    if (workout) {
      setWorkoutType(workout.type);
      setIntensity(workout.intesity);
      setDuration(workout.duration);
      setNotes(workout.notes);
    }
  }, [workout]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateWorkoutStart());
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/workouts/${workoutId}`,
        {
          type: workoutType,
          intesity: intesity,
          duration: duration,
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
        dispatch(updateWorkoutSuccess(response.data));
      }
    } catch (error) {
      dispatch(updateWorkoutFailure(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={workoutType}
        onChange={(e) => setWorkoutType(e.target.value)}
        placeholder="Workout Type"
      />
        <Input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      <Input
        type="text"
        value={intesity}
        onChange={(e) => setIntensity(e.target.value)}
        placeholder="Intensity"
      />

      <Input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder='notes'
      />
      <Button  type="submit">Update Workout</Button>
    </form>
  );
};

export default UpdateWorkoutComponent;
