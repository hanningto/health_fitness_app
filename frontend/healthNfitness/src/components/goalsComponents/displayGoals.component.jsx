import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  deleteGoalStart,
  deleteGoalSuccess,
  fetchGoalsFailure,
  fetchGoalsStart,
  fetchGoalsSuccess,
  updateGoalStart,
} from "../../features/goal/goalSlice";
import axios from "axios";
import InternalStateEx from "./goalPopover.component";
import LogProgress from "../progressComponents/updateProgress.component";
import ProgressUpdatePopover from "../progressComponents/progressUpdatePopover.component";
import GoalProgressComponent from "../progressComponents/singleProgess";

function DisplayGoalsComponent() {
  const dispatch = useDispatch();
  const { goals, loading, error, editing } = useSelector((state) => state.goal);
const component = "goalDisplay"

const [isUpdateClicked, setIsUpdateClicked] = useState(false)


const userdata = localStorage.getItem("user");
const parsedData = JSON.parse(userdata);
const userId = parsedData.user_id;
  useEffect(() => {
    const fetchGoals = async () => {
      dispatch(fetchGoalsStart());
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/goals`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(fetchGoalsSuccess(response.data));
      } catch (error) {
        dispatch(fetchGoalsFailure(error.message));
      }
    };
    fetchGoals();
  }, [dispatch]);

  const handleDelete = async (goal_id) => {
    dispatch(deleteGoalStart());

    try {
      const response = await axios.delete(
        `http://127.0.0.1:3000/api/goals/${goal_id}`
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(deleteGoalSuccess(goal_id));
      }
    } catch (error) {}
  };
  const handleEdit = async (goal_id) => {
    dispatch(updateGoalStart());
  };

  return (
    <div>
      
      <Box mt={8}>
        <Heading as="h2" size="md" mb={4}>
          Your Goals
        </Heading>
        {goals.length > 0 ? (
          <Stack spacing={4}>
            {goals.map((goal) => (
              <Flex key={goal.goal_id} p={4} justifyContent="space-between" borderWidth={1} borderRadius="lg">
                <Box>
                  <Text>
                    <strong>Type:</strong> {goal.goal_type}
                  </Text>
                  <Text>
                    <strong>Target:</strong> {goal.target_value}
                  </Text>
                  <Text>
                    <strong>Start Date:</strong>{" "}
                    {new Date(goal.start_date).toLocaleDateString()}
                  </Text>
                  <Text>
                    <strong>End Date:</strong>{" "}
                    {new Date(goal.end_date).toLocaleDateString()}
                  </Text>
                  <Text>
                    <strong>Goal ID: </strong> {goal.goal_id}
                  </Text>
                  <Box>
                  
                  <InternalStateEx goal_id={goal.goal_id}/>
                  {/* {setRe_render(true)} */}
                    <Button
                      color={"red"}
                      onClick={() => handleDelete(goal.goal_id)}
                    >
                      Delete
                    </Button>
                   <ProgressUpdatePopover goalId={goal.goal_id} userId={userId}/>
                  </Box>
                </Box>
                <GoalProgressComponent goalId={goal.goal_id}/>
              </Flex>
            ))}
          </Stack>
          
        ) : (
          <Text>No goals set yet.</Text>
        )}
      </Box>
    </div>
  );
}

export default DisplayGoalsComponent;
