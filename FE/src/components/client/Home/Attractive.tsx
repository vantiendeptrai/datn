import AttractiveCard from "./AttractiveCard";

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
            gap-2
            lg:gap-5"
          >
            <AttractiveCard
              imageUrl="/images/attractive/ha-noi.jpg"
              label="Hà Nội"
            />

            <AttractiveCard
              imageUrl="/images/attractive/ho-chi-minh.jpg"
              label="Hồ Chí Minh"
            />

            <AttractiveCard
              imageUrl="/images/attractive/da-lat.jpeg"
              label="Đà Lạt"
              row
            />

            <AttractiveCard
              imageUrl="/images/attractive/sapa.jpg"
              label="Sapa"
              col
            />

            <AttractiveCard
              imageUrl="/images/attractive/nha-trang.jpg"
              label="Nha Trang"
              row
            />

            <AttractiveCard
              imageUrl="/images/attractive/hai-phong.jpg"
              label="Hải Phòng"
            />

            <AttractiveCard
              imageUrl="/images/attractive/da-nang.jpg"
              label="Đà Nẵng"
            />

            <AttractiveCard
              imageUrl="/images/attractive/vung-tau.jpg"
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
