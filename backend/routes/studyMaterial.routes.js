import { Router } from "express";
import { uploadMaterial } from "../controllers/studyMaterial.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const studyMaterialRouter = Router();

studyMaterialRouter
  .route("/upload")
  .post(upload.single("material"), uploadMaterial);

export default studyMaterialRouter;
