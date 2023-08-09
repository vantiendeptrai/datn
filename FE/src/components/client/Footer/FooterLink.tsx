import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";

type FooterLinkProps = {
  label: string;
  url: string;
  icon?: IconType;
};

const FooterLink = ({ label, url, icon: Icon }: FooterLinkProps) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(url)}
        className="
        flex
        justify-center
        items-center
        gap-1
        text-textLight2nd
        dark:text-textDark2nd"
      >
        {Icon && <Icon />}
        <h3
          className="
          text-left
          font-normal
          text-base"
        >
          {label}
        </h3>
      </button>
    </>
  );
};

export default FooterLink;
