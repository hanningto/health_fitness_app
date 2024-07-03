import { Router } from "express";
import { addUser, filterUsers, getAllUsers, getOneUser } from "../contollers/users.controller.mjs";

const router = Router()

router.route('/users')
        .get(getAllUsers)
        .get(filterUsers)
        .post(addUser)

router.route('/users/:id')
        .get(getOneUser)


export default router