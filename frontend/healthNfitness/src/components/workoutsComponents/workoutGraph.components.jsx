import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useSelector } from 'react-redux';

function WorkoutDurationChart() {
  // Example workout duration data

  const {workouts} = useSelector((state) => state.workouts)

  const workoutData = workouts.map((workout) =>{
    return {type: workout.type,duration: workout.duration, intensity: workout.intensity}
  })
  console.log(workoutData)
  const data = [
    { date: '2024-01-01', duration: 30, intensity: 'low' },
    { date: '2024-01-02', duration: 45, intensity: 'medium' },
    { date: '2024-01-03', duration: 60, intensity: 'high' },
    { date: '2024-01-04', duration: 50, intensity: 'medium' },
    { date: '2024-01-05', duration: 40, intensity: 'low' },
    { date: '2024-01-06', duration: 70, intensity: 'high' },
    { date: '2024-01-07', duration: 55, intensity: 'medium' },
  ];

  const getBarColor = (intensity) => {
    switch (intensity) {
      case 'high':
        return '#ff4d4d'; 
      case 'medium':
        return '#4d79ff'; 
      case 'low':
        return '#4dff4d'; 
      default:
        return '#8884d8'; 
    }
  };

  return (
    <Box width="100%" height={400}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={workoutData}
          margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="duration" name="Workout Duration (mins)">
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.intensity)} />
            ))}
          </Bar>
          {/* <Bar dataKey="duration" name="Workout Duration (mins)"/> */}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}


export default WorkoutDurationChart