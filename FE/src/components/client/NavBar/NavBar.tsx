import { Container, DarkMode, Logo, Search, UserMenu } from "../..";

type NavBarProps = {
  theme: string | null;
  isLogin: boolean;
  imageUser: string | undefined;
  handleChangeTheme: (theme: string) => void;
  admin?: boolean;
};

const NavBar = ({
  isLogin,
  admin,
  theme,
  imageUser,
  handleChangeTheme,
}: NavBarProps) => {
  return (
    <>
      <div
        className="
        w-full
        py-3
        px-5
        md:px-0
        md:py-0
        shadow
        bg-light
        dark:bg-dark"
      >
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-5"
          >
            <Logo hidden />

            <Search admin={admin} />

            <div
              className="
              flex
              flex-row
              gap-5
              justify-center
              items-center"
            >
              <DarkMode theme={theme} handleChangeTheme={handleChangeTheme} />

              <UserMenu isLogin={isLogin} imageUser={imageUser} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
