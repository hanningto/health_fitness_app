//custom hook for connecting with the database

import { useEffect, useState } from "react";
import axios from "axios";

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/workouts")
      .then((res) => setWorkouts(res.data))
      .catch((error) => setError(error.message));
  }, []);
  return {workouts, error}
};

export default useWorkouts