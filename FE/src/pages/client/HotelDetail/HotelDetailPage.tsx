import {
  AiOutlineAliwangwang,
  AiOutlineMessage,
  AiOutlineTeam,
  AiOutlineTrademark,
  AiOutlineTransaction,
} from "react-icons/ai";
import Footer from "./HeaderFooter/Footer";
import Header from "./HeaderFooter/Header";
import { PiBedBold } from "react-icons/pi";
import { AiFillStar, AiOutlineStar, AiFillHome } from "react-icons/ai";
import Product from "./Product";
import MenuItem from "../../../components/NavBar/MenuItem";

const HotelDetailPage = () => {
  return (
    <div className="bg-[white]">
      <Header />

      {/* phần image */}
      <div className="relative mb-[100px]">
        <img
          className="w-full h-[465px]   bg-no-repeat bg-center]"
          src="../../../../public/images/details/nh-muong-thanh-ca-mau-1_1686640711_1686810628_1686895501.jpg"
        />

        <div className="shadow-lg bg-[white] h-[155px] max-w-screen-xl rounded-[20px] absolute  bottom-[-80px] inset-x-1/4 mt-[130px]">
          <h1 className="text-center text-[25px] font-mono mt-1">
            Mường Thanh Luxury Cà Mau
          </h1>
          <h3 className="flex">
            <AiFillHome className="w-[30px] mt-1" /> Lô C.03A Khu Trung tâm Hành
            Chính Chính trị tỉnh Cà Mau, Phường 9, Thành phố Cà Mau, tỉnh Cà
            Mau, Việt Nam
          </h3>

          <div className="flex justify-between mt-3 overflow-hidden bg-no-repeat bg-center ">
            <div className="flex ml-6">
              <AiFillStar className="mr-1 mt-1" />
              <AiFillStar className="mr-1 mt-1" />
              <AiFillStar className="mr-1 mt-1" />
              <AiFillStar className="mr-1 mt-1" />
              <AiOutlineStar className="mr-1 mt-1" />
              <p className="mx-1">4/5</p>
              <p>(52 reviews)</p>
            </div>
            <div className="mr-2">
              <MenuItem
                type="detail"
                label="Đặt phòng"
                onClick={() => console.log("hi")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* phần thân  */}
      <div className="grid grid-cols-[2fr,1fr] max-w-6xl m-auto ">
        <h2 className="mr-[10px]">
          Khách sạn Mường Thanh Luxury Cà Mau – một trong những khách sạn cao
          cấp hàng đầu khu vực Đồng Bằng sông Cửu Long, tọa lạc tại Khu trung
          tâm hành chính – chính trị thành phố Cà Mau. Khách sạn là điểm dừng
          chân lý tưởng cho những chuyến du lịch hay công tác với vị trí thuận
          tiện để tiếp cận trung tâm thành phố và những điểm du lịch đặc trưng
          của vùng.
        </h2>

        <div className="bg-[#f4f4f5] py-4 rounded-[3px]">
          <h1 className="text-[17px] px-5 font-bold my-1">
            VÌ SAO NÊN CHỌN MƯỜNG THANH?
          </h1>
          <ul>
            <li className="flex px-5 py-1 gap-2">
              <AiOutlineTransaction className="mt-[5px]" />
              <p>Giá không thể tốt hơn</p>
            </li>
            <li className="flex px-5 py-1 gap-2">
              <AiOutlineTrademark className="mt-[5px]" />
              <p> Đặt phòng ăn toàn</p>
            </li>
            <li className="flex px-5 py-1 gap-2">
              <AiOutlineMessage className="mt-[5px]" />{" "}
              <p>Quản lý đặt phòng trực tuyến</p>
            </li>
            <li className="flex px-5 py-1 gap-2">
              <AiOutlineTeam className="mt-[5px]" />{" "}
              <p>Tiện nghi và vị trí tuyệt vời</p>
            </li>
            <li className="flex px-5 py-1 gap-2">
              <AiOutlineAliwangwang className="mt-[5px]" />{" "}
              <p>Nhân viên nói tiếng Việt & Anh</p>
            </li>
          </ul>
        </div>
      </div>

      <Product />

      <Footer />
    </div>
  );
};

export default HotelDetailPage;
