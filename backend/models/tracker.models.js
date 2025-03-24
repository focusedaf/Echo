import mongoose, { Schema } from "mongoose";

const trackerSchema = new Schema(
  {
    // users,course,progress,status
    peeps: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    studyMaterial: [
      {
        type: Schema.Types.ObjectId,
        ref: "StudyMaterial",
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["in-progress", "completed", "pending"],
      default: "pending",
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Tracker = mongoose.model("Tracker", trackerSchema);
