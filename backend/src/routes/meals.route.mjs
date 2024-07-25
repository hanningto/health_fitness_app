import {Router} from "express"
import { allMeals, createMeal, deleteMeal, getMeals, updateMeal } from "../contollers/meals.controller.mjs"

const mealsRouter = Router()

mealsRouter.route('/meals')
                .get(allMeals)
                .post(createMeal)
mealsRouter.route('/meals/:id')
                .delete(deleteMeal)
                .patch(updateMeal)




export default mealsRouter