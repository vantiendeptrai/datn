import { useNavigate } from "react-router-dom";

type LogoProps = {
  hidden?: boolean;
};

const Logo = ({ hidden }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        alt="Logo"
        src="/logo.png"
        width={100}
        height={100}
        onClick={() => navigate("/")}
        className={`
        cursor-pointer
        ${hidden ? "hidden md:block" : ""}
        `}
      />
    </>
  );
};

export default Logo;
