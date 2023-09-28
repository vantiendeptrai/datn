import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../..";

const BillInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  return (
    <>
      <div className="box-border col-span-2">
        <div className="rounded-md p-6 mb-5 bg-light dark:bg-dark">
          <h6 className="font-bold text-xl mb-5 pb-3 border-b border-divideLight dark:border-divideDark text-textLight dark:text-textDark">
            Thông tin người đặt phòng
          </h6>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              id="name"
              label="Họ và tên"
              placeholder="Mời nhập họ và tên"
              register={register}
              errors={errors}
              required
            />

            <Input
              id="email"
              label="Email"
              placeholder="Mời nhập email"
              register={register}
              errors={errors}
              required
            />

            <Input
              id="phone"
              label="Số điện thoại"
              placeholder="Mời nhập số điện thoại"
              register={register}
              errors={errors}
              required
            />

            <div className="md:col-span-2">
              <label
                htmlFor="content"
                className="font-bold text-base block text-textLight dark:text-textDark"
              >
                Yêu cầu thêm
              </label>
              <textarea
                className="mt-2 outline-none px-4 py-3 rounded-lg text-base min-h-[calc(1.5em + 0.75rem + 2px)] block w-full py-2 px-4 text-base font-normal leading-relaxed bg-clip-padding-box border rounded-md transition duration-150 ease-in-out text-textLight dark:text-textDark bg-light dark:bg-dark border-divideLight dark:border-divideDark"
                name="content"
                id="content"
                rows={4}
                placeholder="Ví dụ: Sở thích về giường, địa điểm đón hoặc trả khách"
              />
            </div>
          </div>
        </div>

        <div className="rounded-md p-6 mb-5 bg-light dark:bg-dark">
          <h6 className="font-bold text-xl mb-5 pb-3 border-b border-divideLight dark:border-divideDark text-textLight dark:text-textDark">
            Phương thức thanh toán
          </h6>
        </div>
      </div>
    </>
  );
};

export default BillInfo;
