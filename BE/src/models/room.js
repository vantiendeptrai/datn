import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      // Số phòng
      type: Number,
      required: true,
    },
    roomFloor: {
      // Số tầng
      type: Number,
      required: true,
    },
    image: [
      // Danh sách ảnh
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
      // Sức chứa
      type: Number,
      required: true,
    },
    price: {
      // Giá phòng
      type: Number,
      min: 0,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Có sẵn", // Có thể đặt phòng
        "Đã đặt", // Phòng đã được đặt
        "Đang sử dụng", // Phòng đang được sử dụng
        "Bảo trì", // Phòng đang được bảo trì
        "Đang dọn dẹp", // Phòng đang dọn dẹp
      ],
    },
    description: {
      // Mô tả
      type: String,
      required: true,
    },
    id_serviceFree: {
      // Dịch vụ miễn phí
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceFree",
    },
    id_amenities: [
      {
        // Tiện nghi
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenities",
      },
    ],
    id_hotel: {
      // Khách sạn
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    id_roomType: {
      // Loại phòng
      type: mongoose.Schema.Types.ObjectId,
      ref: "roomType",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Room", roomSchema);
