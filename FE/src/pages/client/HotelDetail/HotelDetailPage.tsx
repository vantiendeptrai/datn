import {
  Container,
  DetailOverview,
  InfoHotel,
  RoomList,
} from "../../../components";

const HotelDetailPage = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-fixed bg-[url(https://booking.muongthanh.com/images/hotels/hotels/original/_hkt6859_1679810462_1691467982.jpg)] w-full h-[530px]">
        <InfoHotel />
      </div>

      <div className="mt-20 p-5">
        <DetailOverview />
      </div>

      <div className="p-5 bg-divideLight dark:bg-divideDark">
        <Container>
          <div className="flex flex-col mb-4">
            <h2 className="uppercase font-semibold text-2xl leading-7 pl-10 text-textLight dark:text-textDark">
              Các loại phòng
            </h2>

            <RoomList />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HotelDetailPage;
