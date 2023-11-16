export const validateMiddleware = (req, res, validationLogic, next) => {
  const { error } = validationLogic.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({
      errors: errors,
    });
  }

  next();
};

export const validateFormMiddleware = (req, res, validationLogic, next) => {
  const { error } = validationLogic.validate(req.fields, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({
      errors: errors,
    });
  }

  next();
};
