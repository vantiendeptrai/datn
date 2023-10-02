import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_service: {
      type: String,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
