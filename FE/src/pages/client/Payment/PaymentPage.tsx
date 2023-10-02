import { BillInfo, BookingInfo, Container } from "../../../components";

const PaymentPage = () => {
  return (
    <>
      <Container>
        <div className="py-12 pb-16">
          <div className="relative flex items-center justify-center mb-5">
            <h2 className="mb-0 font-normal text-2xl text-center uppercase text-textLight dark:text-textDark">
              Thông tin đặt phòng
            </h2>
          </div>

          <div className="block mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <BillInfo />

              <BookingInfo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PaymentPage;
