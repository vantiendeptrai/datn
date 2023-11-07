import { useNavigate } from "react-router-dom";

type LogoProps = {
  url: string;
};

const Logo = ({ url }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        alt="Logo"
        src="/logo.png"
        width={100}
        height={100}
        onClick={() => navigate(url)}
        className="hidden md:block cursor-pointer"
      />
    </>
  );
};

export default Logo;
