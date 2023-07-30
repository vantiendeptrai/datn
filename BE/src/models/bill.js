import mongoose from "mongoose";

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