import { Router } from "express";
import {checkSchema} from "express-validator"

import {
  getAllWorkoutLogs,
  LogWorkout,
} from "../contollers/workout.contoller.mjs";
import { workoutLogSchema } from "../utils/validationSchemas/workoutSchema.mjs";

const workoutRouter = Router();

workoutRouter.route("/workouts")
                .get(getAllWorkoutLogs)
                .post(LogWorkout );

export default workoutRouter;

