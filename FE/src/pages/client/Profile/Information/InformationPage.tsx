import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InfoDetail, Information } from "../../../../components";

const InformationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div
        className="
        bg-light
        dark:bg-dark
        rounded-xl
        w-full
        h-auto"
      >
        <Information imageUser="" handleSubmit={handleSubmit(onSubmit)} />

        <InfoDetail
          register={register}
          errors={errors}
          handleSubmit={handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
};

export default InformationPage;
