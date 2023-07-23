import joi from "joi";

import { errorMessages } from "./component/errorMessages";

const hotelValidate = joi.object({
    name: joi.string().required().messages(errorMessages("Tên khách sạn")),
    image: joi.string().required().messages(errorMessages("Ảnh khách sạn")),
    status: joi.string().required().messages(errorMessages("Trạng thái khách sạn")),
    address: joi.string().required().messages(errorMessages("Địa chỉ khách sạn")),
    phone: joi.string().required().messages(errorMessages("Số điện thoại khách sạn")),
    email: joi.string().required().messages(errorMessages("Email khách sạn")),
    description: joi.string().required().messages(errorMessages("Mô tả khách sạn")),
    city: joi.string().required().messages(errorMessages("Tên thành phố")),

});

export default hotelValidate;
