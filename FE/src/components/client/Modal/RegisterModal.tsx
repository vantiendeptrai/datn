import { useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";

import { Button, Input, Modal } from "../..";
import { useRegisterMutation } from "../../../api/auth";
import { useLoginModal, useRegisterModal } from "../../../hooks";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [registerUser, resultRegister] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onToggle = useCallback(() => {
    reset();
    registerModal.onClose();
    loginModal.onOpen();
  }, [reset, loginModal, registerModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    registerUser(data)
      .unwrap()
      .then((response) => {
        console.log(response);
        onToggle();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const bodyContent = (
    <form className="flex flex-col gap-4">
      <Input
        id="name"
        label="Tên người dùng"
        placeholder="Nhập tên người dùng của bạn"
        disabled={resultRegister.isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Tài khoản"
        placeholder="Nhập email của bạn"
        disabled={resultRegister.isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Mật khẩu"
        type="password"
        placeholder="********"
        disabled={resultRegister.isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="confirmPassword"
        label="Nhập lại mật khẩu"
        type="password"
        placeholder="********"
        disabled={resultRegister.isLoading}
        register={register}
        errors={errors}
        required
      />
    </form>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr className="border border-divideLight dark:border-divideDark" />

      <Button
        outline
        label="Đăng nhập bằng Google"
        icon={FcGoogle}
        onClick={() => alert("Google")}
      />

      <div className="text-textDark2nd dark:text-textDark2nd text-center mt-4 font-light">
        <p>
          Bạn đã có tài khoản?
          <span
            onClick={onToggle}
            className="text-textLight dark:text-textDark cursor-pointer hover:underline"
          >
            {" "}
            Đăng nhập
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={resultRegister.isLoading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Đăng ký"
      actionLabel="Đăng ký"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
