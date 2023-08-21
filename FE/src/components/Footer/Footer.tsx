import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

import { Container, Logo } from "..";

const Footer = () => {
  return (
    <>
      <div
        className="
        py-6
        md:py-0
        border-t-2
        border-divideLight
        dark:border-divideDark"
      >
        <Container>
          <div
            className="
            flex
            flex-col-reverse
            md:flex-row
            gap-3
            md:gap-32
            justify-between
            items-center"
          >
            <div
              className="
              text-center
              text-textLight2nd
              dark:text-textDark2nd"
            >
              © 2018 Royal Hospitality. All Rights Reserved.
            </div>

            <div
              className="
              mr-0
              md:mr-32"
            >
              <Logo />
            </div>

            <div
              className="
              flex
              gap-5"
            >
              <BsFacebook
                size={25}
                className="
                cursor-pointer
                text-textLight2nd
                dark:text-textDark2nd"
              />
              <BsInstagram
                size={25}
                className="
                cursor-pointer
                text-textLight2nd
                dark:text-textDark2nd"
              />
              <BsYoutube
                size={25}
                className="
                cursor-pointer
                text-textLight2nd
                dark:text-textDark2nd"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
