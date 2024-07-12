import { Router } from "express"
import { allProgresses, logProgress } from "../contollers/progress.controller.mjs"

const progressRouter = Router()

progressRouter.route('/progress')
        .get(allProgresses)
        .post(logProgress)


export default progressRouter