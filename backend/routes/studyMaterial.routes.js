import { Router } from "express";
import { uploadMaterial } from "../controllers/studyMaterial.controllers.js";

const studyMaterialRouter = Router();

studyMaterialRouter.route("/upload").post(uploadMaterial);

export default studyMaterialRouter;
