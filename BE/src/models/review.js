import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Review", reviewSchema);
