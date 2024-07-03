import { Router } from "express"
import { allProgresses } from "../contollers/progress.controller.mjs"

const progressRouter = Router()

progressRouter.route('/progress')
        .get(allProgresses)

export default progressRouter