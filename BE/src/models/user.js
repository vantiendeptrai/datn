import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      // Tên
      type: String,
      required: true,
    },
    email: {
      // Email
      type: String,
      required: true,
      unique: true,
    },
    password: {
      // Mật khẩu
      type: String,
      required: true,
    },
    isLockAccount: {
      // Trạng thái tài khoản
      type: Boolean,
      default: false,
    },
    role: {
      // Vai trò
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
