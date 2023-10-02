import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    check_in: {
      type: Date,
      required: true,
    },
    check_out: {
      type: Date,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Đang chờ xử lý",
        "Đã xác nhận",
        "Đã hủy bỏ",
        "Vắng mặt",
        "Hoàn thành",
      ],
      default: "Đang chờ xử lý",
    },
    id_bill: {
      type: String,
      required: true,
    },
    id_room: {
      type: String,
      required: true,
    },
    passport: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Booking", BookingSchema);
