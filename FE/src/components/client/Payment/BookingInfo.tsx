import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../..";

const BookingInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      voucher: "",
    },
  });

  return (
    <>
      <div className="rounded-md p-6 mb-5 bg-light dark:bg-dark">
        <h6 className="font-bold text-xl mb-5 pb-3 border-b border-divideLight dark:border-divideDark text-textLight dark:text-textDark">
          Yêu cầu đặt phòng của bạn
        </h6>

        <div className="mb-3 pb-5 border-b-2 border-dashed border-divideLight dark:border-divideDark">
          <div className="mb-1 font-bold text-base text-textLight dark:text-textDark">
            <a href="#">Mường Thanh Grand Xa La</a>
          </div>

          <div className="text-base leading-normal text-textLight2nd dark:text-textDark2nd">
            <p className="font-medium">
              Nhận phòng: Thứ 3, 26/09/2023 từ 14:00
            </p>

            <p className="font-medium">
              Trả phòng: Thứ 7, 30/09/2023 cho đến 12:00
            </p>
          </div>
        </div>

        <div className="relative mb-3 pb-5 border-b-2 border-dashed border-divideLight dark:border-divideDark">
          <p className="mb-0 font-bold text-base leading-normal text-textLight dark:text-textDark">
            Thông tin phòng
          </p>
        </div>

        <div className="flex items-center justify-between font-semibold text-base mt-5 mb-3 pb-5 border-b-2 border-dashed border-divideLight dark:border-divideDark">
          <span className="text-textLight dark:text-textDark">Giá</span>
          <span className="text-textLight2nd dark:text-textDark2nd">
            5,202,000 VNĐ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 mb-5 pb-5 border-b-2 border-dashed border-divideLight dark:border-divideDark">
          <div className="lg:col-span-3">
            <Input
              id="voucher"
              label="Mã khuyến mãi"
              placeholder="Nhập mã khuyến mãi"
              register={register}
              errors={errors}
              required
            />
          </div>

          <div className="lg:mt-4">
            <Button label="Áp dụng" onClick={() => alert("Áp dụng")} />
          </div>
        </div>

        <div className="flex items-center justify-between text-base mb-4 font-bold">
          <span>Tổng giá:</span>
          <span className="text-xl text-yellow-600">5,202,000 VNĐ</span>
        </div>

        <p>Bao gồm tất cả các loại thuế và phí dịch vụ</p>
        <p className="text-red-500">
          (Theo quy định của Ngân hàng Nhà nước Việt Nam, Quý khách vui lòng
          thanh toán bằng VNĐ)
        </p>
      </div>
    </>
  );
};

export default BookingInfo;
