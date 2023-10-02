import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id_google: {
      type: String,
      required: false,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isLockAccount: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    id_information: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Information",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
