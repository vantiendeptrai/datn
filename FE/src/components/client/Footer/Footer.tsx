import { FooterBottom, FooterCenter } from "../..";

type FooterProps = {
  admin?: boolean;
};

const Footer = ({ admin }: FooterProps) => {
  return (
    <>
      <div
        className={`
        ${admin ? "hidden" : ""}
        `}
      >
        <FooterCenter />
      </div>

      <FooterBottom />
    </>
  );
};

export default Footer;
