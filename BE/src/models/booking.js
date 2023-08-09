import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    Check_in_Date: {
      type: Date,
      required: true,
    },
    Check_our_Date: {
      type: Date,
      required: true,
    },

    total_Price: {
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
        "Thành công",
      ],
      default: "Thành công",
    },
    id_bill: {
      type: String,
      required: true,
    },
    id_room: {
      type: String,
      required: true,
    },
    cccd: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Book", BookingSchema);
