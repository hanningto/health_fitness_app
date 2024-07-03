import { Router } from "express";
import { allActivities } from "../contollers/activities.contoller.mjs";

const activitiesRoute = Router()

activitiesRoute.route('/activities/:id')
                    .get(allActivities)


export default activitiesRoute