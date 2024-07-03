import { Router } from "express";
import { allGoals } from "../contollers/goals.controller.mjs";

const goalsRouter=  Router()

goalsRouter.route('/goals')
                .get(allGoals)


export default goalsRouter