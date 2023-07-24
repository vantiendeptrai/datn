// import { useNavigate } from "react-router-dom";

type HotelFilterProps = {
  all: string; //tất cả
  AnyType: string; //loại phòng
  Address: string; //đại chỉ
  Transaction: string; //tiền giao dịch
  More: string;
};

const HotelFilter = ({
  all,
  AnyType,
  Address,
  Transaction,
  More,
}: HotelFilterProps) => {
  // const navigate = useNavigate();

  return (
    <>
      <section className="p-4 md:p-6 lg:p-5">
        <div className="gap-3 grid grid-cols-3 sm:grid-cols-6">
          {/* grid grid-cols-3 sm:grid-cols-7 */}

          <input
            type="search"
            id="search"
            className=" p-2 pl-10  rounded-[10px]  text-textLight2nd
            bg-backgroundLight
            outline-none
            dark:text-textDark2nd
            dark:bg-backgroundDark "
            placeholder="Nhập địa chỉ"
            required
          />

          <select
            value=""
            className="rounded-[7px] p-2 bg-backgroundLight
            dark:text-textDark2nd
            dark:bg-backgroundDark"
          >
            <option>{all}</option>
            <option>{all}</option>
          </select>

          <select
            value=""
            className="rounded-[7px]  p-2 bg-backgroundLight
          dark:text-textDark2nd
          dark:bg-backgroundDark"
          >
            <option>{AnyType}</option>
            <option>{AnyType}</option>
          </select>

          <select
            value=""
            className="rounded-[7px]  p-2 bg-backgroundLight
            dark:text-textDark2nd
            dark:bg-backgroundDark"
          >
            <option>{Address}</option>
            <option>{Address}</option>
          </select>

          <select
            value=""
            className="rounded-[7px]  p-2 bg-backgroundLight
            dark:text-textDark2nd
            dark:bg-backgroundDark"
          >
            <option>{Transaction}</option>
            <option>{Transaction}</option>
          </select>

          <section
            className="rounded-[7px]  p-2 bg-backgroundLight
        dark:text-textDark2nd
        dark:bg-backgroundDark"
          >
            <option>{More}</option>
          </section>
        </div>
      </section>
    </>
  );
};

export default HotelFilter;
