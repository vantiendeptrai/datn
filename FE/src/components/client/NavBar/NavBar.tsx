import { Container, DarkMode, Logo, Search, UserMenu } from "../..";

type NavBarProps = {
  theme: string | null;
  isLogin: boolean;
  imageUser: string;
  handleChangeTheme: (theme: string) => void;
};

const NavBar = ({
  isLogin,
  theme,
  imageUser,
  handleChangeTheme,
}: NavBarProps) => {
  return (
    <>
      <div
        className="
        w-full
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
            gap-10"
          >
            <Logo />

            <div
              className="
              relative
              w-full"
            >
              <Search />
            </div>

            <DarkMode theme={theme} handleChangeTheme={handleChangeTheme} />

            <UserMenu isLogin={isLogin} imageUser={imageUser} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
