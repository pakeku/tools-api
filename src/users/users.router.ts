import express from "express";
import {
    checkRequiredPermissions,
    validateAccessToken,
} from "../middleware/auth0.middleware";
import {
    userPing,
} from "./users.service";

export const userRouter = express.Router();

userRouter.post(
    "/ping",
    validateAccessToken,
    checkRequiredPermissions([]),
    (req, res) => {
        const message = userPing(req.body.user);

        res.status(200).json(message);
    }
);
