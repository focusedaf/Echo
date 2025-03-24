import mongoose, { Schema } from "mongoose";

const studyMaterialSchema = new Schema(
  {
    // user should be able to upload diff types of filetypes and should also be able to add title,description
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      lowercase: true,
      trim: true,
    },
    // cloudinary finna make this stuff easy. use id to keep track of files n url for uploading stuff
    files: [
      {
        public_id: String,
        url: String,
        fileType: String,
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export const StudyMaterial = mongoose.model(
  "StudyMaterial",
  studyMaterialSchema
);
