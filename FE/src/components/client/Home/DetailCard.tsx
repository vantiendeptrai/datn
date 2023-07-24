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
  return (
    <>
      <div
        className={`
        group
        relative
        hover:z-10
        transition
        duration-300
        ease-in-out
        ${
          reverse
            ? "hover:scale-x-105 hover:scale-y-105 origin-bottom-right"
            : "hover:scale-x-105 hover:scale-y-105 origin-bottom-left"
        }
        `}
      >
        <img
          src={src}
          alt="Detail"
          className="
          w-full
          h-full
          group-hover:blur-sm"
        />

        <div
          className="
          hidden
          md:group-hover:block
          duration-300"
        >
          <div
            className="
            absolute
            inset-0
            opacity-100
            group-hover:bg-neutral-800/80"
          />

          <h3
            className={`
            absolute
            uppercase
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
            absolute
            uppercase
            text-2xl
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
            text-sm
            w-64
            text-justify
            text-textDark
            ${reverse ? "right-[15%]" : "left-[15%]"}
            `}
          >
            {description}
          </p>

          <h2
            className={`
            absolute
            top-64
            w-3/4
            cursor-pointer
            text-[180px]
            font-EzLasso
            text-textDark
            ${reverse ? "right-72" : "left-80"}
            `}
          >
            {content}
          </h2>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
