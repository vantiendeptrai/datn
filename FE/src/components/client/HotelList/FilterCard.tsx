const FilterCard = () => {
  return (
    <>
      <div className="p-5 border-b border-divideLight dark:border-divideDark">
        <p className="font-semibold text-base leading-normal text-textLight dark:text-textDark">
          Thương hiệu
        </p>

        <ul className="mb-0 p-0 mt-3 list-none">
          <li className="mb-3">
            <label
              className="flex items-center leading-normal text-textLight2nd dark:text-textDark2nd"
              htmlFor="type1"
            >
              <input
                type="checkbox"
                value="1"
                id="type1"
                className="w-4 h-4 rounded-md mr-2 shadow-none"
              />
              Luxury
            </label>
          </li>

          <li className="mb-3">
            <label
              className="flex items-center leading-normal text-textLight2nd dark:text-textDark2nd"
              htmlFor="type2"
            >
              <input
                type="checkbox"
                value="2"
                id="type2"
                className="w-4 h-4 rounded-md mr-2 shadow-none"
              />
              Holyday
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterCard;
