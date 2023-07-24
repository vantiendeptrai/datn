import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";

import { Button, Input, Modal } from "../..";
import { instance } from "../../../api";
import { setCookie } from "../../../utils";
import { useLoginModal, useRegisterModal } from "../../../hooks";

const LoginModal = () => {
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
      email: "",
      password: "",
    },
  });

  const onToggle = useCallback(() => {
    reset();
    loginModal.onClose();
    registerModal.onOpen();
  }, [reset, loginModal, registerModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    instance
      .post("/auth/login", data)
      .then((response) => {
        toast.success("Đăng nhập tài khoản thành công!");
        setCookie("accessToken", response.data.accessToken, 1);
        setCookie("refreshToken", response.data.refreshToken, 3);
        loginModal.onClose();
        reset();
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
        mt-4
        text-center
        font-light
        text-textDark2nd
        dark:text-textDark2nd"
      >
        <p>
          Bạn chưa có tài khoản?
          <span
            onClick={onToggle}
            className="
            text-textLight
            dark:text-textDark
            cursor-pointer
            hover:underline"
          >
            {" "}
            Đăng ký
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Đăng nhập"
      actionLabel="Đăng nhập"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
