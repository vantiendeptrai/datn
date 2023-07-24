import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InfoDetail, Information, Sidebar } from "../../../../components";

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
        flex
        gap-5
        p-5"
      >
        <Sidebar />

        <div
          className="
          bg-light
          dark:bg-dark
          rounded-xl
          pb-3
          min-h-screen
          w-full"
        >
          <Information imageUser="" handleSubmit={handleSubmit(onSubmit)} />

          <InfoDetail
            register={register}
            errors={errors}
            handleSubmit={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </>
  );
};

export default InformationPage;
