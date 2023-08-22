import { BsTelephone } from "react-icons/bs";

import { Container, Logo } from "..";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#002864] dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-xl text-[#ffffff] uppercase font-semibold dark:text-[#ffffff]">BẠN CẦN GIÚP ĐỠ?</h2>
              <ul className="text-[#ffffff] dark:text-gray-400 text-lg">
                <li className="">
                  <Link to="/" className="hover:underline">Quản lý các đặt phòng</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Hỗ trợ</Link>
                </li>
                <li>
                  <p className="mt-6">Bạn muốn đặt chỗ</p>
                </li>
                <li className="mt-2">
                  <span className="" ><BsTelephone className="inline-block h-5 w-5" /></span>
                  <span className="px-2" >0967891596</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-semibold text-[#ffffff] uppercase dark:text-[#ffffff]">ĐIỀU KHOẢN VÀ QUY ĐỊNH</h2>
              <ul className="text-[#ffffff] dark:text-gray-400 text-lg">
                <li>
                  <Link to="/" className="hover:underline ">Điều khoản chung</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Quy định chung</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Quy định về thanh toán</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Quy định về xác nhận thông tin đặt phòng</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Chính sách quyền riêng tư</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-semibold text-[#ffffff] uppercase dark:text-[#ffffff]">TRỤ SỞ</h2>
              <ul className="text-[#ffffff] dark:text-gray-400 text-lg">
                <li>
                  <p>Số nhà 25, Tổ dân phố 21, Phường Him Lam, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam</p>
                </li>
                <li>
                  <p className="text-xl font-semibold mt-2">Email:</p>
                  <p className="text-lg">rovalhotel@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white w-full sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4">

          <div className="mx-auto sm:flex sm:items-center sm:justify-between">
            <span className="text-lg text-[#ffffff] sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Rovalhotel™</Link>. All Rights Reserved.
            </span>
            <div className="flex  mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link to="#" className="text-[#ffffff] hover:text-gray-900 dark:hover:text-[#ffffff]">
                <AiFillFacebook className="w-6 h-6" />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link to="#" className="text-[#ffffff] hover:text-gray-900 dark:hover:text-[#ffffff]">
                <AiFillYoutube className="w-6 h-6" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link to="#" className="text-[#ffffff] hover:text-gray-900 dark:hover:text-[#ffffff]">
                <AiFillInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram page</span>
              </Link>

            </div>
          </div>
        </div>
        {/* <hr className="border-t border-white w-full my-6 dark:border-gray-700" /> */}
      </footer>


    </>
  );
};
export default Footer;