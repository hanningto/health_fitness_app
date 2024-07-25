import { Router } from "express";
import { createSleepLog, deleteSleep, getSleepLogs } from "../contollers/sleepLogs.controller.mjs";

const sleepRouter = Router()

sleepRouter.route('/sleep')
                .get(getSleepLogs)
                .post(createSleepLog)
sleepRouter.route('/sleep/:id')
                .delete(deleteSleep)
                .patch()





export default sleepRouter