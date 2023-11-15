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
        "Chờ thanh toán",
        "Đã hủy bỏ",
        "Vắng mặt",
        "Thanh toán thành công",
        "Đã hoàn tiền",
        "Đã nhận phòng",
        "Đã trả phòng"
      ],
      default: "Đang chờ xử lý",
    },
    id_room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room'
    },

  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Booking", BookingSchema);
