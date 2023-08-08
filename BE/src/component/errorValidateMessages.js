const errorValidateMessages = (fieldName) => {
  return {
    "string.base": `${fieldName} phải là chuỗi`,
    "string.empty": `${fieldName} không được để trống`,
    "string.email": `${fieldName} không đúng định dạng`,
    "string.min": `${fieldName} phải dài hơn 12 ký tự`,

    "number.base": `${fieldName} phải là số`,
    "number.empty": `${fieldName} không được để trống`,
    "number.min": `${fieldName} phải lớn hơn 0`,
    "number.max": `${fieldName} phải nhỏ hơn hoặc bằng giá trị tối đa`,

    "array.base": `${fieldName} phải là mảng`,
    "array.empty": `${fieldName} không được để trống`,
    "array.min": `${fieldName} ít nhất là 1`,
    "array.max": `${fieldName} phải nhỏ hơn hoặc bằng giá trị tối đa`,

    "object.base": `${fieldName} phải là đối tượng`,
    "object.empty": `${fieldName} không được để trống`,

    "any.required": `${fieldName} là bắt buộc`,
    "any.only": `${fieldName} không khớp`,
  };
};

export default errorValidateMessages;
