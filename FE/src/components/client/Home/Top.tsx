import { Container } from "../..";

const Top = () => {
  return (
    <>
      <Container>
        <div className="flex flex-row max-lg:flex-col p-3 md:p-10">
          <div className="col-span-6 p-5">
            <div className="flex flex-row items-center">
              <h3 className="w-max py-0 px-[0.5rem] pr-[1rem] rounded-[50px] font-medium text-[1.7rem] bg-[#faa935] text-textLight dark:text-textDark font-Island">
                Know Before You Go
              </h3>

              <img
                src="/images/client/home/world.png"
                alt="Tour"
                className="w-[2.3rem] h-[2.3rem]"
              />
            </div>

            <h1 className="md:text-[3.2rem] text-[2rem] font-semibold mt-[1rem] mb-[2rem] text-textLight dark:text-textDark">
              Tạo dấu ấn trong kỳ nghỉ của bạn với
              <br className="block sm:hidden" />
              <span className="text-orange-500"> King Hotel</span>
            </h1>

            <p className="text-[1.1rem] leading-[2rem] text-textLight2nd dark:text-textDark2nd">
              Tận hưởng kỳ nghỉ lý tưởng tại khách sạn chúng tôi - nơi hòa quyện
              giữa tiện nghi hiện đại và không gian thoáng đãng, mang đến cho
              bạn trải nghiệm đáng nhớ. Đặt phòng ngay hôm nay để có cơ hội nhận
              ưu đãi đặc biệt!
            </p>
          </div>

          <div className="flex flex-row gap-5 col-span-2">
            <div className="col-span-2">
              <img
                src="/images/client/home/hero-img-1.jpg"
                alt="Hero"
                className="w-[400px] h-[350px] rounded-[20px] border-[1px] object-cover border-divideLight dark:border-divideDark"
              />
            </div>

            <div className="col-span-2 mt-0 lg:mt-6">
              <video
                src="/images/client/home/hero-video.mp4"
                controls
                className="w-[400px] h-[350px] rounded-[20px] border-[1px] object-cover border-divideLight dark:border-divideDark"
              />
            </div>

            <div className="col-span-2 mt-0 lg:mt-12">
              <img
                src="/images/client/home/hero-img-2.jpg"
                alt="Hero"
                className="w-[400px] h-[350px] rounded-[20px] border-[1px] object-cover border-divideLight dark:border-divideDark"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Top;
