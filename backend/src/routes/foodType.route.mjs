import { Router } from "express";
import { createFoodType, getFoodTypes } from "../contollers/foodType.controller.mjs";

const foodTypeRouter = Router()


foodTypeRouter.route('/foodTypes')
                .get(getFoodTypes)
                .post(createFoodType)






export default foodTypeRouter