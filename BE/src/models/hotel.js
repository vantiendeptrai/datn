import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      // Tên khách sạn
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
      // Địa chỉ
      type: String,
      required: true,
    },
    phone: {
      // Số điện thoại
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Có sẵn", // Khách sạn đang hoạt động
        "Đã đóng cửa", // Khách sạn tạm thời đóng cửa
        "Đang sửa", // Khách sạn đang sửa chữa
        "Hết chỗ", // Khách sạn không còn phòng trống
        "Ngừng hoạt động", // Khách sạn tạm thời ngừng hoạt động
      ],
    },
    email: {
      // Email
      type: String,
      required: true,
    },
    description: {
      // Mô tả
      type: String,
      required: true,
    },
    id_review: [
      {
        // Đánh giá
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    amenities_and_facilities: [
      {
        // Tiện nghi
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenities",
        required: true,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Hotel", hotelSchema);
