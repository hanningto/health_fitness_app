import { Router } from "express";
import { createWaterIntake, deleteWaterLog, waterIntake } from "../contollers/waterIntake.controller.mjs";

const waterIntakeRouter = Router()

waterIntakeRouter.route('/water')
                    .get(waterIntake)
                    .post(createWaterIntake)
waterIntakeRouter.route('/water/:id')
                    .delete(deleteWaterLog)
                    .patch()



export default waterIntakeRouter