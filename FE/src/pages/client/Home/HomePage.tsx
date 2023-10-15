import { Attractive, Service, Top } from "../../../components";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Top />
        <Service />
        <Attractive />
      </div>
    </>
  );
};

export default HomePage;
