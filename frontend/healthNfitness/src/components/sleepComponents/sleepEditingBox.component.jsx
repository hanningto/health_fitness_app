import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import { updateSleepFailure, updateSleepStart, updateSleepSuccess } from '../../features/sleep/sleepSlice';

const UpdateSleepComponent = ({ sleepId }) => {
  const dispatch = useDispatch();
  const { sleeps } = useSelector((state) => state.sleeps);
  const sleep = sleeps.find((sleep) => sleep.sleep_id === sleepId);

  const [sleepDate, setSleepDate] = useState(sleep ? sleep.sleep_date.split('T')[0] : '');
  const [duration, setDuration] = useState(sleep ? sleep.duration : '');
  const [notes, setNotes] = useState(sleep ? sleep.notes : '');

  useEffect(() => {
    if (sleep) {
      setSleepDate(sleep.sleep_date.split('T')[0]);
      setDuration(sleep.duration);
      setNotes(sleep.notes);
    }
  }, [sleep]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateSleepStart());
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/sleeps/${sleepId}`,
        {
          sleep_date: sleepDate,
          duration: duration,
          notes: notes,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(updateSleepSuccess(response.data));
      }
    } catch (error) {
      dispatch(updateSleepFailure(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
   
        <Input
          type="date"
          value={sleepDate}
          onChange={(e) => setSleepDate(e.target.value)}
        />
   
      <Input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder='duration'
      />
      <Input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder='notes'
      />
      <Button  type="submit">Update Sleep</Button>
    </form>
  );
};

export default UpdateSleepComponent;
