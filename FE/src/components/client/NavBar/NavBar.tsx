import { Container, DarkMode, Logo, Search, UserMenu } from "../..";

const NavBar = () => {
  return (
    <>
      <div className="w-full py-3 px-5 md:px-0 md:py-0 shadow bg-light dark:bg-dark">
        <Container>
          <div className="flex flex-row items-center justify-between gap-5">
            <Logo url="/" />

            <Search />

            <div className="flex flex-row gap-5 justify-center items-center">
              <DarkMode />

              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
