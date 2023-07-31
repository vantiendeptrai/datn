import mongoose from "mongoose";

<<<<<<< Updated upstream
const BillSchema = new mongoose.Schema({

  dueDate: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  depositAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timeSeries: true, versionKey: false })

export default mongoose.model('Bill', BillSchema)
=======
const billSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    id_user:
    {
      type: String,
      required: true,
    },

    id_payment:
    {
      type: String,
      required: true,
    },

  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Bill", billSchema);
>>>>>>> Stashed changes
