import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

type SearchProps = {
  admin?: boolean;
};

const Search = ({ admin }: SearchProps) => {
  return (
    <>
      {admin ? (
        <div
          className="
          block
          md:hidden
          cursor-pointer
          text-textLight
          dark:text-textDark"
        >
          <AiOutlineMenu size={25} />
        </div>
      ) : (
        <div
          className="
          w-full
          md:w-1/2
          py-2
          rounded-full
          cursor-pointer
          border-[1px]
          border-divideLight
          dark:border-divideDark
          text-textLight
          dark:text-textDark"
        >
          <div
            className="
            flex
            flex-row
            items-center
            justify-between"
          >
            <div
              className="
              text-sm 
              font-semibold 
              px-6"
            >
              Vị trí
            </div>

            <div
              className="
              hidden
              md:block
              text-sm
              font-semibold
              px-6
              flex-1
              text-center
              border-x-[1px]
              border-divideLight
              dark:border-divideDark"
            >
              Thời gian
            </div>

            <div
              className="
              text-sm
              font-semibold
              pl-6
              pr-2
              flex
              flex-row
              items-center
              gap-3"
            >
              <div
                className="
                hidden
                md:block"
              >
                Khách
              </div>

              <div
                className="
                p-2
                rounded-full
                bg-backgroundLight
                dark:bg-backgroundDark"
              >
                <AiOutlineSearch size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
