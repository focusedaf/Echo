import { Router } from "express";

const userRouter = Router();

userRouter.route("/signup");
userRouter.route("/login");

export default userRouter;
