import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        alt="Logo"
        src="/logo.png"
        width={100}
        height={100}
        onClick={() => navigate("/")}
        className="hidden md:block cursor-pointer"
      />
    </>
  );
};

export default Logo;
