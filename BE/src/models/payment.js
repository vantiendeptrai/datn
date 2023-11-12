import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    paymentMethod: {
      type: String,
      required: true,
    }
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
