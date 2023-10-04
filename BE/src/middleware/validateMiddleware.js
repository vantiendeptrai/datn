export const validateMiddleware = (req, res, validationLogic, next) => {
  // Kiểm tra nếu req.body là một đối tượng rỗng
  if (Object.keys(req.body).length === 0) {
    // Kiểm tra req.fields và req.files
    if (req.fields || req.files) {
      const { error } = validationLogic.validate(req.fields, req.files, {
        abortEarly: false,
      });

      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          errors: errors,
        });
      }
    }
  } else {
    // Kiểm tra req.body
    const { error } = validationLogic.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors: errors,
      });
    }
  }

  next();
};
