import { Router } from "express";
import {
        createUser,
        filterUsers,
        getAllUsers,
        getOneUser,
        login,
        logout,
} from "../contollers/users.controller.mjs";

const router = Router();

router.route("/")
        .get(filterUsers);

router.route("/register")
        .get(getAllUsers)
        .post(createUser);

router.route("/login")
        .post(login);
router.route("/logout")
        .post(logout)

export default router;
