import {Router} from "express"
import { allMeals, createMeal, getMeals } from "../contollers/meals.controller.mjs"

const mealsRouter = Router()

mealsRouter.route('/meals')
                .get(allMeals)
                .post(createMeal)



export default mealsRouter