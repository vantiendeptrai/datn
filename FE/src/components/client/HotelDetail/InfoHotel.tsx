import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail, AiOutlinePhone, AiOutlineStar } from "react-icons/ai";

import { Button } from "../..";

type HotelDetail = {
  name: string;
  address: string;
  email: string;
  phone: string;
};

const InfoHotel = ({ name, address, email, phone }: HotelDetail) => {
  return (
    <>
      <div className="h-auto md:h-36 relative top-[50%] md:top-[80%] left-1/2 transform translate-x-[-50%] rounded-lg shadow-lg p-5 bg-light dark:bg-dark w-[75%]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-xl lg:text-3xl font-semibold text-textLight dark:text-textDark">
              {name}
            </h1>

            <div className="flex gap-1 md:items-center text-textLight2nd dark:text-textDark2nd">
              <CiLocationOn size={20} />
              <p className="text-xs lg:text-sm mt-0.5 text-justify">
                {address}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 text-textLight2nd dark:text-textDark2nd">
              <div className="flex gap-1 items-center">
                <AiOutlineMail className="text-xs md:text-xl" />
                <a href="#" className="text-xs">
                  {email}
                </a>
              </div>

              <div className="flex gap-1 items-center">
                <AiOutlinePhone className="text-xs md:text-xl" />
                <a href="#" className="text-xs">
                  +{phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-5 w-auto md:w-[25%] relative">
            <div className="flex items-center justify-start">
              <span className="text-xs lg:text-sm text-textLight2nd dark:text-textDark2nd">
                Đánh giá:
              </span>

              <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight2nd dark:text-textDark2nd">
                <AiOutlineStar />
              </span>
              <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight2nd dark:text-textDark2nd">
                <AiOutlineStar />
              </span>
              <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight2nd dark:text-textDark2nd">
                <AiOutlineStar />
              </span>
              <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight2nd dark:text-textDark2nd">
                <AiOutlineStar />
              </span>
              <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight2nd dark:text-textDark2nd">
                <AiOutlineStar />
              </span>
            </div>

            <Button label="Đặt phòng" onClick={() => alert("Đặt phòng")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHotel;
