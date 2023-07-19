import { useState } from "react";

type DetailCardProps = {
  src: string;
  title: string;
  content: string;
  label: string;
  description: string;
  reverse?: boolean;
};

const DetailCard = ({
  src,
  title,
  content,
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
                bg-neutral-800/80
                opacity-100"
              />

              <h3
                className={`
                uppercase
                absolute
                font-dancing
                text-2xl
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
                text-2xl
                font-dancing
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
                font-dancing
                text-sm
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

      {isHover && (
        <h2
          className={`
          absolute
          z-10
          text-7xl
          font-dancing
          text-textDark
          duration-300
          top-2/3
          transition-all
          ${reverse ? "right-1/4" : "left-1/4"}
          `}
        >
          {content}
        </h2>
      )}
    </>
  );
};

export default DetailCard;
