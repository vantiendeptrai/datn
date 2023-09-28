import { Container, Filter, ListHotel } from "../../../components";

const HotelListPage = () => {
  return (
    <>
      <div className="p-0 md:p-5">
        <Container>
          <div className="flex gap-5">
            <Filter />

            <ListHotel />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HotelListPage;
