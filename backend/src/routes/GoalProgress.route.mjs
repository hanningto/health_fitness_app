import { Router } from "express";
import { progress, progressCalculation } from "../contollers/goalProcgress.controlle.mjs";


const progressDetailsRouter= Router()

progressDetailsRouter.route('/progress-details')
                        .post(progress)




export default progressDetailsRouter