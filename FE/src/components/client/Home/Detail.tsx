import { DetailCard } from "../..";

type DetailProps = {
  data: {
    src: string;
    title: string;
    content: string;
    label: string;
    description: string;
    reverse?: boolean;
  }[];
};

const Detail = ({ data }: DetailProps) => {
  return (
    <>
      <div
        className="
        flex
        flex-col
        md:flex-row
        py-5"
      >
        {data.map((item) => (
          <DetailCard
            key={item.title}
            src={item.src}
            title={item.title}
            label={item.label}
            content={item.content}
            description={item.description}
            reverse={item.reverse}
          />
        ))}
      </div>
    </>
  );
};

export default Detail;
