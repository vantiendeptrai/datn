import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";

import { Button, Input, Modal } from "../..";
import { instance } from "../../../api";
import { useLoginModal, useRegisterModal } from "../../../hooks";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

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
    },
  });

  const onToggle = useCallback(() => {
    reset();
    registerModal.onClose();
    loginModal.onOpen();
  }, [reset, loginModal, registerModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    instance
      .post("/auth/register", data)
      .then(() => {
        toast.success("Đăng ký tài khoản thành công!");
        onToggle();
      })
      .catch((error) => {
        const errorMessage = Array.isArray(error.response.data.message)
          ? error.response.data.message[0]
          : error.response.data.message;

        toast.error(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
      title="Đăng ký"
      actionLabel="Đăng ký"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
