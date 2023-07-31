import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
    }
})
export default mongoose.model("Service", serviceSchema)