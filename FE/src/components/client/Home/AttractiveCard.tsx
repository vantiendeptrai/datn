type AttractiveCardProps = {
  imageUrl: string;
  label: string;
  secondary?: string;
  row?: boolean;
  col?: boolean;
};

const AttractiveCard = ({
  imageUrl,
  label,
  secondary,
  row,
  col,
}: AttractiveCardProps) => {
  return (
    <>
      <a
        title="Hà Nội"
        className={`
        z-1
        before:z-1
        group
        relative
        w-full
        overflow-hidden
        rounded-md
        bg-gray-100
        shadow-black
        duration-100
        before:absolute
        before:top-0
        before:left-0
        before:h-full
        before:w-full
        before:bg-gradient-to-t
        before:from-black/70
        before:via-black/10
        before:to-black/0
        hover:shadow-xl
        ${row ? "md:row-span-2 h-full" : "h-36 sm:h-48"}
        ${col ? "md:col-span-2 h-full" : ""}
        `}
        href="#"
      >
        <span
          className="
          box-border
          block
          overflow-hidden
          w-auto
          h-auto
          absolute
          opacity-100
          border-0
          m-0
          p-0
          inset-0
          bg-none"
        >
          <img
            alt={label}
            src={imageUrl}
            decoding="async"
            data-nimg="fill"
            className="
            duration-700
            ease-in-out
            group-hover:scale-105
            absolute
            inset-0
            box-border
            p-0
            border-none
            m-auto
            block
            w-0
            h-0
            min-w-[100%]
            max-w-[100%]
            min-h-[100%]
            max-h-[100%]
            object-cover"
          />
        </span>

        <div
          className="
          absolute
          bottom-0
          left-0
          z-10
          w-full
          p-2
          text-white
          sm:px-4
          sm:py-3"
        >
          <h3
            className="
            mb-1
            text-sm
            font-bold
            leading-none
            sm:mb-0
            sm:text-2xl"
          >
            {label}
          </h3>

          <span
            className="
            block
            text-[11px]
            leading-none
            sm:text-sm"
          >
            {secondary}
          </span>
        </div>
      </a>
    </>
  );
};

export default AttractiveCard;
