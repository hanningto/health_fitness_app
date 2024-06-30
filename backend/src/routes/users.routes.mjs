import { Router } from "express";
import { getAllUsers, getOneUser } from "../contollers/users.controller.mjs";

const router = Router()

router.route('/')
        .get(getAllUsers)

router.route('/:id')
        .get(getOneUser)


export default router