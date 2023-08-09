import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    serviceId: {
      type: String,
      required: true,
    },
    totalPrice: {
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
