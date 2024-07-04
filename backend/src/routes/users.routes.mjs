import { Router } from "express";
import { createUser, filterUsers, getAllUsers, getOneUser, login } from "../contollers/users.controller.mjs";

const router = Router()

router.route('/register')
        .get(getAllUsers)
        .get(filterUsers)
        .post(createUser)

router.route('/login')
        .post(login)


export default router