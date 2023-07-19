import { useState } from "react";

type DetailCardProps = {
  src: string;
  title: string;
  label: string;
  description: string;
  reverse?: boolean;
};

const DetailCard = ({
  src,
  title,
  label,
  description,
  reverse,
}: DetailCardProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`
        overflow-hidden
        relative
        hover:z-10
        transition-all
        duration-200
        ease-linear
        ${
          reverse
            ? "md:hover:scale-x-105 md:hover:scale-y-105 md:origin-bottom-right"
            : "md:hover:scale-x-105 md:hover:scale-y-105 md:origin-bottom-left"
        }
        `}
      >
        <img
          src={src}
          alt="Detail"
          className={`
          w-[100%]
          h-auto
          min-h-[100%]
          align-middle
          ${isHover ? "md:blur-sm" : ""}
          `}
        />

        {isHover && (
          <>
            <div
              className="
              hidden
              md:block"
            >
              <div
                className="
                absolute
                inset-0
                hidden
                md:block
                bg-neutral-800/70
                opacity-100"
              />

              <h3
                className={`
                uppercase
                absolute
                text-xl
                text-textDark
                cursor-pointer
                hover:border-b
                ${reverse ? "top-20 left-5" : "top-20 right-5"}
                `}
              >
                {title}
              </h3>

              <span
                className={`
                uppercase
                absolute
                text-xl
                text-textDark
                cursor-pointer
                hover:border-b
                ${reverse ? "top-32 left-5" : "top-32 right-5"}
                `}
              >
                {label}
              </span>

              <p
                className={`
                absolute
                top-[40%]
                w-56
                text-[12px]
                text-justify
                cursor-pointer
                text-textDark
                ${reverse ? "right-[15%]" : "left-[15%]"}
                `}
              >
                {description}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailCard;
