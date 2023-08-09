import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: [
      {
        status: {
          type: String,
          default: "done",
        },
        name: {
          type: String,
          required: true,
        },
        uid: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Có sẵn", "Đã đóng cửa", "Đang sửa", "Hết chỗ", "Ngừng hoạt động"],
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    id_amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenities",
        required: true,
      },
    ],
    id_review: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Hotel", hotelSchema);
