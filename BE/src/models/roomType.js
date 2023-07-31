import mongoose from "mongoose";

const roomTypeSchema = new mongoose.Schema(
  {
    // Tên
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("RoomType", roomTypeSchema);
