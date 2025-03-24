import { Router } from "express";
import { progressTracker } from "../controllers/tracker.controllers.js";

const trackerRouter = Router();

trackerRouter.route(":id/track").get(progressTracker);

export default trackerRouter;
