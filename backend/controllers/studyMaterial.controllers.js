import { StudyMaterial } from "../models/studyMaterial.models.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";

const uploadMaterial = async (req, res) => {
  try {
    console.log("Request method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request headers:", req.headers);
    console.log("Received file:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // upload file to cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

    if (!cloudinaryResponse) {
      console.error("Cloudinary upload failed for file:", req.file.path);
      return res.status(500).json({
        error: "Cloudinary upload failed",
        filePath: req.file.path,
      });
    }

    // save material in database with Cloudinary URL
    const uploadedMaterial = await StudyMaterial.create({
      // save the Cloudinary file URL
      material: cloudinaryResponse.secure_url,
    });

    return res.status(200).json({
      success: "Material uploaded successfully",
      url: cloudinaryResponse.url,
    });
  } catch (error) {
    return res.status(500).json({
      error: "There was an error while uploading the materials",
      details: error.message,
    });
  }
};

export { uploadMaterial };
