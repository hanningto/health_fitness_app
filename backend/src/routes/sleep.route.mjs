import { Router } from "express";
import { createSleepLog } from "../contollers/sleepLogs.controller.mjs";

const sleepRouter = Router()

sleepRouter.route('/sleep')
                .get()
                .post(createSleepLog)





export default sleepRouter