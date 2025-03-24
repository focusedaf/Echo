import { Tracker } from "../models/tracker.models.js";

const progressTracker = async (req,res) => {
try {
    
} catch (error) {
    console.error("Unable to track progress");
    return req.status(500); 
}
}

export {progressTracker}