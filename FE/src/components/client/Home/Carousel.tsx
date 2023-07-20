import { useEffect, useState } from "react";

type CarouselProps = {
  auto?: boolean;
  listImage: { url: string }[];
};

const Carousel = ({ auto, listImage }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % listImage.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [auto, listImage.length]);

  return (
    <>
      <div
        className="
        group
        overflow-hidden
        duration-100
        hover:shadow-xl"
      >
        <div
          className="
          box-border
          overflow-hidden
          opacity-100
          inset-0"
        >
          <img
            alt="Du lịch khám phá"
            src={listImage[current].url}
            decoding="async"
            className="
            duration-700
            ease-in-out
            group-hover:scale-105
            box-border
            object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
