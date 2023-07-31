import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    id_user: {
      type: String,
      required: true,
    },

    id_payment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Bill", billSchema);
