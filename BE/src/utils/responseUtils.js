import jwt from "jsonwebtoken";

export const sendResponse = (res, status, message, data = null) => {
  return res.status(status).json({
    message: message,
    data: data,
  });
};

export const handleJWTError = (error, res) => {
  if (error instanceof jwt.TokenExpiredError) {
    return res.status(401).json({
      message: "Token đã hết hạn!",
    });
  } else if (error instanceof jwt.NotBeforeError) {
    return res.status(401).json({
      message: "Token chưa có hiệu lực!",
    });
  } else if (error instanceof jwt.JsonWebTokenError) {
    return res.status(401).json({
      message: "Token không hợp lệ!",
    });
  }
};
