import { Button } from "../../../components";

const HomePage = () => {
  return (
    <>
      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        <Button label="Hủy" onClick={() => alert("1")} outline />
      </div>
    </>
  );
};

export default HomePage;
