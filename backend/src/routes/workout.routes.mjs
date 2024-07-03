import { Router } from "express";
import { getAllWorkoutLogs } from "../contollers/workout.contoller.mjs";

const workoutRouter = Router()

workoutRouter.route('/workouts')
        .get(getAllWorkoutLogs)

export default workoutRouter