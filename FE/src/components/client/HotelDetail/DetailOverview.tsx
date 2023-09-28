import { BsChat } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { LiaWalletSolid } from "react-icons/lia";
import { MdManageHistory } from "react-icons/md";

import { Container } from "../..";

const DetailOverview = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-auto md:w-[70%] text-justify">
            <div className="box-border">
              <p className="text-textLight2nd dark:text-textDark2nd">
                <strong className="text-textLight dark:text-textDark">
                  Mường Thanh Grand Sài Gòn Centre
                </strong>{" "}
                nằm trên tuyến phố rợp bóng cây xanh, một khu vực yên tĩnh giữa
                trung tâm sôi động của TP. HCM. Từ khách sạn chỉ mất 5 phút đi
                bộ đến nhà thờ Đức Bà, 10 phút đến Nhà hát Thành phố, và 10 phút
                đi taxi đến chợ Bến Thành, rất thuận lợi cho du khách lưu trú và
                tham quan các điểm du lịch nổi tiếng của TP. HCM.
                <br />
              </p>
              <br />
              <p className="text-textLight2nd dark:text-textDark2nd">
                Với tổng cộng 124 phòng tiêu chuẩn quốc tế, khách sạn{" "}
                <strong className="text-textLight dark:text-textDark">
                  Mường Thanh Grand Sài Gòn Centre
                </strong>{" "}
                có nhiều loại phòng phù hợp với khách công vụ và cho đoàn khách
                du lịch. Tất cả các loại phòng được thiết kế trang nhã, tinh tế
                với chất liệu gần gũi với thiên nhiên. Bên cạnh đó, hệ thống cửa
                kính an toàn trong phòng sẽ đem lại cho Quý khách những góc nhìn
                toàn cảnh và đầy màu sắc khi ngắm nhìn thành phố náo nhiệt lúc
                lên đèn.
                <br />
              </p>
              <br />
              <p className="text-textLight2nd dark:text-textDark2nd">
                Phương châm của khách sạn{" "}
                <strong className="text-textLight dark:text-textDark">
                  Mường Thanh Grand Sài Gòn Centre
                </strong>{" "}
                là mang đến sự ấm áp nồng hậu, và lòng hiếu khách đã được trải
                dài trong suốt những năm qua trong chuỗi khách sạn Mường Thanh.
                Kết hợp với những tiện nghi của một khách sạn hiện đại, chúng
                tôi liên tục phấn đấu để cải thiện chất lượng dịch vụ, vì chúng
                tôi tin rằng chất lượng dịch vụ sẽ mang đến sự hài lòng cho quý
                khách.
              </p>
            </div>
          </div>

          <div className="w-30 p-8 xl:h-64 lg:h-80 md:h-96 h-auto rounded-md bg-divideLight dark:bg-divideDark">
            <h6 className="text-uppercase text-base font-bold text-textLight dark:text-textDark">
              Vì sao nên chọn Mường Thanh?
            </h6>

            <div className="flex items-center mt-3 text-textLight2nd dark:text-textDark2nd">
              <LiaWalletSolid size={20} />
              <span className="ml-2">Giá không thể tốt hơn</span>
            </div>

            <div className="flex items-center mt-3 text-textLight2nd dark:text-textDark2nd">
              <AiOutlineLock size={20} />
              <span className="ml-2">Đặt phòng an toàn</span>
            </div>

            <div className="flex items-center mt-3 text-textLight2nd dark:text-textDark2nd">
              <MdManageHistory size={20} />
              <span className="ml-2">Quản lý đặt phòng trực tuyến</span>
            </div>

            <div className="flex items-center mt-3 text-textLight2nd dark:text-textDark2nd">
              <CiLocationOn size={20} />
              <span className="ml-2">Tiện nghi và vị trí tuyệt vời</span>
            </div>

            <div className="flex items-center mt-3 text-textLight2nd dark:text-textDark2nd">
              <BsChat size={20} />
              <span className="ml-2">Nhân viên nói tiếng Việt & Anh</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailOverview;
