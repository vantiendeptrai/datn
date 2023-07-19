import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";

import { Button, Input, Modal } from "../..";
import { useLoginModal, useRegisterModal } from "../../../hooks";
import { useCallback, useState } from "react";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const onToggle = useCallback(() => {
    loginModal.onOpen();
    registerModal.onClose();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div
      className="
      flex
      flex-col
      gap-4"
    >
      <Input
        id="name"
        label="Tên người dùng"
        placeholder="Nhập tên người dùng của bạn"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="email"
        label="Tài khoản"
        placeholder="Nhập email của bạn"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Mật khẩu"
        type="password"
        placeholder="********"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div
      className="
      flex
      flex-col
      gap-4
      mt-3"
    >
      <hr
        className="
        border
        border-divideLight
        dark:border-divideDark"
      />

      <Button
        outline
        label="Đăng nhập bằng Google"
        icon={FcGoogle}
        onClick={() => alert("Google")}
      />

      <div
        className="
        text-textDark2nd
        dark:text-textDark2nd
        text-center
        mt-4
        font-light"
      >
        <p>
          Bạn đã có tài khoản?
          <span
            onClick={onToggle}
            className="
            text-textLight
            dark:text-textDark
            cursor-pointer 
            hover:underline"
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
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Đăng nhập"
      actionLabel="Đăng nhập"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
