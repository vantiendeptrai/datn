import { CiLocationOn } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import { Button } from "../..";

const HotelCard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 p-3 mb-4 gap-3 rounded-lg bg-light dark:bg-dark">
        <div className="relative">
          <a href="hotel-detail/1" className="no-underline">
            <img
              src="https://booking.muongthanh.com/images/hotels/hotels/original/_hkt6859_1679810462_1691467982.jpg"
              alt="Mường Thanh Grand Sài Gòn Centre"
              className="rounded-md w-full xl:h-48 md:h-44 object-contain"
            />
          </a>
        </div>

        <div className="box-border">
          <h2 className="font-semibold text-2xl leading-normal mb-4 text-textLight dark:text-textDark">
            <a href="#" className="no-underline">
              Mường Thanh Grand Sài Gòn Centre
            </a>
          </h2>

          <p className="flex mb-4 font-normal text-base leading-normal gap-1 text-textLight2nd dark:text-textDark2nd">
            <CiLocationOn size={25} />
            Số 8-8A Mạc Đĩnh Chi, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí
            Minh, Việt Nam
          </p>

          <div className="flex items-center justify-start">
            <span className="text-textLight dark:text-textDark">Đánh giá:</span>

            <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight dark:text-textDark">
              <AiOutlineStar />
            </span>
            <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight dark:text-textDark">
              <AiOutlineStar />
            </span>
            <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight dark:text-textDark">
              <AiOutlineStar />
            </span>
            <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight dark:text-textDark">
              <AiOutlineStar />
            </span>
            <span className="inline-block w-4 h-4 rounded-full relative mt-0.5 ml-1 text-textLight dark:text-textDark">
              <AiOutlineStar />
            </span>
          </div>
        </div>

        <div className="pl-5 lg:border-l border-divideLight dark:border-divideDark flex">
          <div className="w-full mt-auto text-right text-textLight2nd dark:text-textDark2nd">
            <div className="box-border">
              <div className="flex lg:flex-col flex-row gap-10">
                <div className="">
                  <p>Chỉ từ</p>

                  <p className="text-md lg:text-2xl font-bold text-textLight dark:text-textDark">
                    2,025,000
                    <span>VNĐ</span>
                  </p>

                  <p>phòng/đêm</p>
                </div>

                <Button label="Đặt phòng" onClick={() => alert("Đặt phòng")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
