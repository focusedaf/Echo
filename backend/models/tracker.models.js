import mongoose, { Schema } from "mongoose";

const trackerSchema = new Schema({



    
},{timestamps:true})



export const Tracker = mongoose.model('Tracker',trackerSchema)