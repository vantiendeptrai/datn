import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../..";

const InfoUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5 py-5 px-3">
        <Input
          id="name"
          label="Tên người dùng"
          placeholder="Tên người dùng"
          register={register}
          errors={errors}
        />
        <Input
          id="email"
          label="Địa chỉ email"
          placeholder="Địa chỉ email"
          register={register}
          errors={errors}
        />
        <Input
          id="phone"
          label="Số điện thoại"
          placeholder="Số điện thoại"
          register={register}
          errors={errors}
        />
        <Input
          id="address"
          label="Địa chỉ"
          placeholder="Địa chỉ"
          register={register}
          errors={errors}
        />
      </div>
    </>
  );
};

export default InfoUser;
