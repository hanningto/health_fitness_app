import { Router } from "express";
import { progress, progressCalculation, singleprogress } from "../contollers/goalProcgress.controlle.mjs";


const progressDetailsRouter= Router()

progressDetailsRouter.route('/progress-details')
                        .post(progress)

progressDetailsRouter.route('/progress-details/:id')
                        .get(singleprogress)




export default progressDetailsRouter