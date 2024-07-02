import { Router } from "express";
import { filterUsers, getAllUsers, getOneUser } from "../contollers/users.controller.mjs";

const router = Router()

router.route('/')
        .get(getAllUsers)
        .get(filterUsers)

router.route('/:id')
        .get(getOneUser)


export default router