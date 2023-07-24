import {
  Container,
  HotelCard,
  HotelFilter,
  HotelPagination,
} from "../../../components";

const HotelList = () => {
  return (
    <>
      <div className="bg-light dark:bg-dark mx-5 mt-5 rounded-xl">
        <Container>
          <div className="text-[20px] p-4 pl-10 dark:text-white font-sans md:sans-serif sm:text-3xl">
            Danh sách khách sạn
          </div>
          {/* LỌC PHÒNG */}
          <HotelFilter
            all="Tất cả trạng thái"
            AnyType="AnyType"
            Address="Address"
            Transaction="Transaction"
            More="More"
          />
          {/*  */}

          {/* PHÒNG */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
            <HotelCard
              name="Star Sun Hotel & Apartment"
              price={500}
              address="Ha noi"
              image="/images/product1.png"
            />
          </div>
          {/*  */}

          {/* STT TRANG */}
            <HotelPagination />
          {/*  */}
        </Container>
      </div>
    </>
  );
};

export default HotelList;
