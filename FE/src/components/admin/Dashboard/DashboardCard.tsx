import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

import { IconType } from "react-icons";

type DashboardCardProps = {
  label: string;
  total: number;
  percent: number;
  increase?: boolean;
  decrease?: boolean;
  icon: IconType;
};

const DashboardCard = ({
  label,
  increase,
  total,
  decrease,
  percent,
  icon: Icon,
}: DashboardCardProps) => {
  return (
    <>
      <div
        className="
        w-full
        lg:w-6/12
        xl:w-3/12
        px-3"
      >
        <div
          className="
          relative
          flex
          flex-col
          min-w-0
          break-words
          rounded-xl
          mb-6
          xl:mb-0
          shadow-lg
          bg-light
          dark:bg-dark"
        >
          <div
            className="
            flex-auto
            p-4"
          >
            <div
              className="
              flex
              flex-wrap"
            >
              <div
                className="
                relative
                w-full
                pr-4
                max-w-full
                flex-grow
                flex-1"
              >
                <h5
                  className="
                  text-textLight2nd
                  dark:text-textDark2nd
                  uppercase
                  font-bold
                  text-xs"
                >
                  {label}
                </h5>
                <span
                  className="
                  font-semibold
                  text-xl
                  text-textLight
                  dark:text-textDark"
                >
                  {total}
                </span>
              </div>
              <div
                className="
                relative
                w-auto
                pl-4
                flex-initial"
              >
                <div
                  className="
                  p-3
                  text-center
                  inline-flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  shadow-lg
                  rounded-full
                  bg-backgroundLight
                  dark:bg-backgroundDark
                  text-textLight
                  dark:text-textDark"
                >
                  <Icon size={20} />
                </div>
              </div>
            </div>
            <p
              className="
              text-sm
              mt-4
              flex"
            >
              <span
                className={`
                mr-2
                flex
                items-center
                ${increase ? "text-green-500" : ""}
                ${decrease ? "text-red-500" : ""}
                `}
              >
                {increase && <AiOutlineArrowUp />}
                {decrease && <AiOutlineArrowDown />}
                {percent}%
              </span>

              <span
                className="
                whitespace-nowrap
                text-textLight2nd
                dark:text-textDark2nd"
              >
                Kể từ tuần trước
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
