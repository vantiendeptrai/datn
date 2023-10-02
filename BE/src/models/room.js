import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    room_number: {
      type: Number,
      required: true,
    },
    room_floor: {
      type: Number,
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
    capacity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    status: {
      type: String,
      enum: ["Có sẵn", "Đã đặt", "Đang sử dụng", "Bảo trì", "Đang dọn dẹp"],
    },
    description: {
      type: String,
      required: true,
    },
    id_amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenities",
      },
    ],
    id_hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    id_roomType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roomType",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Room", roomSchema);
