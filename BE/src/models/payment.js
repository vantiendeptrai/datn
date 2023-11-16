import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }, // Liên kết với collection Booking
    amount: { type: Number, required: true }, // Số tiền thanh toán
    paymentDate: { type: Date, default: Date.now }, // Ngày và giờ thanh toán, mặc định là thời điểm tạo tài liệu
    paymentStatus: { type: String, enum: ['Thành công', 'Thất bại'], default: 'Thành công' }, // Trạng thái thanh toán (ví dụ: "Thành công", "Đang chờ xử lý",...)
    cardLast4: { type: String }, // 4 chữ số cuối cùng của số thẻ ngân hàng (lưu ý: không lưu trữ thông tin thẻ trực tiếp)
    transactionId: { type: String }, // Mã giao dịch từ cổng thanh toán
    description: { type: String }, // Mô tả giao dịch
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
