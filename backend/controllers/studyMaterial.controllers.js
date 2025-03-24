import { StudyMaterial } from "../models/studyMaterial.models.js";

const uploadMaterial = async (req, res) => {
    try {
        
    } catch (error) {
      console.error('There was an error while uploading the materials')
      return req.status(500)  
    }
};

export { uploadMaterial };
