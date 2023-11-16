import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: [
      {
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
      default: "Có sẵn",
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
    city: {
      type: String,
      required: true,
    },
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
