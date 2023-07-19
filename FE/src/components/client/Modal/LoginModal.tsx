import { FcGoogle } from "react-icons/fc";

import { Button, Input, Modal } from "../..";
import { useLoginModal } from "../../../hooks";

const LoginModal = () => {
  const login = useLoginModal();

  const bodyContent = (
    <div
      className="
      flex
      flex-col
      gap-4"
    >
      <Input id="email" label="Email" placeholder="Email" />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
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
          Bạn chưa có tài khoản?
          <span
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
      disabled={false}
      isOpen={login.isOpen}
      onClose={() => login.onClose()}
      onSubmit={() => alert("Login")}
      title="Đăng nhập"
      actionLabel="Đăng nhập"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
