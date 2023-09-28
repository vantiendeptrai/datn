import { FilterCard } from "../..";

const Filter = () => {
  return (
    <>
      <div className="box-border hidden md:block">
        <div className="box-position sticky top-120 bg-light dark:bg-dark">
          <div className="box-border">
            <div className="w-72">
              <h3 className="px-5 py-3 font-semibold text-base mb-0 leading-normal border-b text-textLight dark:text-textDark border-divideLight dark:border-divideDark">
                Lọc
              </h3>

              <FilterCard />

              <FilterCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
