import { Router } from "express";
import { createWaterIntake, waterIntake } from "../contollers/waterIntake.controller.mjs";

const waterIntakeRouter = Router()

waterIntakeRouter.route('/water')
                    .get(waterIntake)
                    .post(createWaterIntake)



export default waterIntakeRouter