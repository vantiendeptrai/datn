import { IconType } from "react-icons";

import { FooterLink } from "../..";

type FooterCardProps = {
  data: {
    title: string;
    links: { label: string; url: string; icon?: IconType }[];
  };
};

const FooterCard = ({ data }: FooterCardProps) => {
  return (
    <>
      <div
        className="
        w-full
        mb-5"
      >
        <h3
          className="
          font-bold
          text-lg
          text-textLight
          dark:text-textDark"
        >
          {data.title}
        </h3>

        <div
          className="
          grid
          grid-cols-1
          gap-1"
        >
          <div>
            {data.links.map((item) => (
              <FooterLink
                key={item.label}
                label={item.label}
                url={item.url}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCard;
