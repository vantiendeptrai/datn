import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
    id_room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room'
    },
    id_payment_method: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment'
      // required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Booking", BookingSchema);
