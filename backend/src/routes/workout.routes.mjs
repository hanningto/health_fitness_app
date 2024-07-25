import { Router } from "express";
import {checkSchema} from "express-validator"

import {
  deleteWorkout,
  getAllWorkoutLogs,
  LogWorkout,
  updateWorkout,
} from "../contollers/workout.contoller.mjs";
import { workoutLogSchema } from "../utils/validationSchemas/workoutSchema.mjs";

const workoutRouter = Router();

workoutRouter.route("/workouts")
                .get(getAllWorkoutLogs)
                .post(LogWorkout );
workoutRouter.route("/workouts/:id")
                .delete(deleteWorkout)
                .patch(updateWorkout)
export default workoutRouter;

