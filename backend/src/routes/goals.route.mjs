import { Router } from "express";
import {
    allGoals,
    deleteGoal,
    setGoal,
    updateGoal,
} from "../contollers/goals.controller.mjs";

const goalsRouter = Router();

goalsRouter.route("/goals")
                .get(allGoals)
                .post(setGoal);

goalsRouter.route("/goals/:id")
                .delete(deleteGoal)
                .patch(updateGoal);

export default goalsRouter;
