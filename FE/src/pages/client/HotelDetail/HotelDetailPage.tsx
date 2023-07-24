import { AiOutlineWifi } from 'react-icons/ai';

import { MdOutlineKitchen, MdBalcony } from 'react-icons/md';

const HotelDetailPage = () => {
  return (
    <>
      <div className="bg-white dark:bg-dark dark:text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between mt-4 px-4 md:px-0">
          <div className="w-full md:w-[800px]">
            <img className="w-full" src="/images/hotel-detail/banner_detail.png" alt="" />
            <div className="flex  md:flex-row md:justify-between mt-6">
              <div className=" ">
                <p className="font-semibold dark:text-white text-xl">Apartment</p>
                <p className="mt-2 font-semibold">Star home hotel & Apartment</p>
                <div className="flex items-center mt-2 ">
                  icon map
                  <p className="ml-2 text-[#808191]">VinhHom royo city</p>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex">
                  đánh giá sao
                </div>
                <div>
                  <p>Price</p>
                  <a className="text-2xl text-blue-600 font-bold">$80</a>
                  <a className="ml-2 text-[#808191]">for one day</a>
                </div>
              </div>
            </div>
            <h2 className="font-semibold mt-4">Facility</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <MdOutlineKitchen />
                <p>Kitchen</p>
              </div>
              <div>
                <MdBalcony />
                <p>Balcony</p>
              </div>
              <div>
                <AiOutlineWifi />
                <p>Wifi</p>
              </div>

            </div>
            <div className="pt-4">
              <p className="font-semibold">Description</p>
              <p className="pt-2 text-[#808191]">
                Nằm ở vị trí trung tâm tại Thắng Tam của Vung Tau, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
                Nằm ở vị trí trung tâm tại Thắng Tam của Vung Tau, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[500px] mt-4 md:mt-0 ml-4">
            <div className="flex justify-center md:justify-end">
              <div className="mr-4">
                <img src="/images/hotel-detail/1_detail.png" alt="" />
              </div>
              <div>
                <img src="/images/hotel-detail/1_detail.png" alt="" />
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-6">
              <div className="mr-4">
                <img src="/images/hotel-detail/1_detail.png" alt="" />
              </div>
              <div>
                <img src="/images/hotel-detail/1_detail.png" alt="" />
              </div>
            </div>
            <div className="mt-10 ml-6 ">
              <iframe
                className="w-[80%] mx-auto rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.779422199642!2d105.81363747470803!3d21.001477280641023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9b3f23b42b%3A0x49fa01aaa06d239b!2sVinhomes%20Royal%20City!5e0!3m2!1svi!2s!4v1689353968605!5m2!1svi!2s"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-full h-[40px] bg-blue-500 mt-4 rounded hover:scale-90">
              <button className="w-full text-center text-white pt-2">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetailPage;
