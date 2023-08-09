import mongoose from "mongoose";

const amenitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surcharge: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Amenities", amenitiesSchema);
