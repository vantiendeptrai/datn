import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <>
      <div
        className="
        m-5
        w-full
        md:w-auto
        transition
        rounded-xl
        cursor-pointer
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <div
          className="
          flex
          items-center
          gap-3
          p-1"
        >
          <div
            className="
            transition
            py-3
            pl-3
            text-textLight2nd
            dark:text-textDark2nd"
          >
            <AiOutlineSearch />
          </div>

          <input
            type="text"
            placeholder="Tìm kiếm"
            className="
            pr-3
            w-full
            outline-none
            text-textLight2nd
            bg-backgroundLight
            dark:text-textDark2nd
            dark:bg-backgroundDark"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
