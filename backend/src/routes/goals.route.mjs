import { Router } from "express";
import { allGoals, deleteGoal, setGoal, updateGoal } from "../contollers/goals.controller.mjs";

const goalsRouter=  Router()

goalsRouter.route('/goals')
                .get(allGoals)
                .post(setGoal)
                .patch(updateGoal)
                .delete(deleteGoal)


export default goalsRouter