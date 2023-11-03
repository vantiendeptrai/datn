type ServiceCardProps = {
  url: string;
  title: string;
  desc: string;
};

const ServiceCard = ({ url, title, desc }: ServiceCardProps) => {
  return (
    <>
      <div className="p-[1rem] border-b-[1px] border-b-divideLight dark:border-b-divideDark border-r-[1px] border-r-divideLight dark:border-r-divideDark rounded-[0.5rem]">
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[50px] bg-[#faa83586] p-[0.5rem] mb-[1rem] leading-[50px]">
          <img src={url} alt="Service" className="w-full" />
        </div>

        <h5 className="text-[1.1rem] font-medium text-textLight dark:text-textDark">
          {title}
        </h5>

        <p className="text-sm text-textLight2nd dark:text-textDark2nd">
          {desc}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
