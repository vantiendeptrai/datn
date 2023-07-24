import { BiMap } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai';

import { BiBed } from 'react-icons/bi';



function Productdetail() {
    return (
        <div className="flex flex-col md:flex-row justify-between mt-4 mx-2 md:mx-6">
            <div className="w-full md:w-[800px] md:mr-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                        <p className="text-[#808191]">Apartment</p>
                        <p className="pt-2">Start SUN HOTEL & APORTMENT</p>
                        <div className="flex pt-2">
                            <BiMap />
                            <p>Việt Nam</p>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex">
                            <AiFillStar size="20px" color="yellow" />
                            <AiFillStar size="20px" color="yellow" />
                            <AiFillStar size="20px" color="yellow" />
                            <AiFillStar size="20px" color="yellow" />
                            <AiFillStar size="20px" color="yellow" />
                        </div>
                        <div className="pt-2">
                            <p>Price</p>
                            <div className="pt-2">
                                <a className="text-2xl text-blue-600 font-bold">$80</a>
                                <a className="ml-2 text-[#808191]">for one day</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="mt-4">Facility</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {/* Các phần tử trong phần này giữ nguyên, không cần chỉnh sửa */}
                </div>

                <div className="pt-4">
                    <p className="font-semibold">Description</p>
                    <p className="pt-2 text-[#808191]">
                        Nằm ở vị trí trung tâm tại Thắng Tam của Vung Tau, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
                        Nằm ở vị trí trung tâm tại Thắng Tam của Vung Tau, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-[600px] md:ml-4 mt-4">
                <div className="md:hidden">
                    <iframe
                        className="mx-auto rounded"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.779422199642!2d105.81363747470803!3d21.001477280641023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9b3f23b42b%3A0x49fa01aaa06d239b!2sVinhomes%20Royal%20City!5e0!3m2!1svi!2s!4v1689353968605!5m2!1svi!2s"
                        width="100%"
                        height="450"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="hidden md:block">
                    <iframe
                        className="mx-auto rounded "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.779422199642!2d105.81363747470803!3d21.001477280641023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9b3f23b42b%3A0x49fa01aaa06d239b!2sVinhomes%20Royal%20City!5e0!3m2!1svi!2s!4v1689353968605!5m2!1svi!2s"
                        width="600"
                        height="450"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="w-full mt-4 rounded">
                    <button className="h-[40px] rounded w-full text-center bg-[#FF6B6B] text-white">Book Now</button>
                </div>
            </div>
        </div>
    )
}





export default Productdetail 