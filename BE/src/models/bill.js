import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_payment: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Bill", billSchema);
