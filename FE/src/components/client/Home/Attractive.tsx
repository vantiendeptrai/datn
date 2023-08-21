import { AttractiveCard } from "../..";

const Attractive = () => {
  return (
    <>
      <div
        className="
        py-8
        md:py-10"
      >
        <div
          className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          md:px-8
          lg:px-8"
        >
          <div
            className="
            mb-5
            text-center
            md:mb-8"
          >
            <h2
              className="
              text-2xl
              font-bold
              lg:text-3xl
              text-texLight
              dark:text-textDark"
            >
              Điểm đến nổi bật
            </h2>
          </div>

          <div
            className="
            grid
            auto-cols-auto
            grid-flow-row
            auto-rows-auto
            grid-cols-3
            lg:gap-5
            gap-2"
          >
            <AttractiveCard
              imageUrl="/images/client/home/ha-noi.jpg"
              label="Hà Nội"
            />

            <AttractiveCard
              imageUrl="/images/client/home/ho-chi-minh.jpg"
              label="Hồ Chí Minh"
            />

            <AttractiveCard
              imageUrl="/images/client/home/da-lat.jpeg"
              label="Đà Lạt"
              row
            />

            <AttractiveCard
              imageUrl="/images/client/home/sapa.jpg"
              label="Sapa"
              col
            />

            <AttractiveCard
              imageUrl="/images/client/home/nha-trang.jpg"
              label="Nha Trang"
              row
            />

            <AttractiveCard
              imageUrl="/images/client/home/hai-phong.jpg"
              label="Hải Phòng"
            />

            <AttractiveCard
              imageUrl="/images/client/home/da-nang.jpg"
              label="Đà Nẵng"
            />

            <AttractiveCard
              imageUrl="/images/client/home/vung-tau.jpg"
              label="Vũng Tàu"
              col
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Attractive;
