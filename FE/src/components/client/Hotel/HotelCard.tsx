import { useNavigate } from "react-router-dom";

type HotelCardProps = {
  name: string;
  price: number;
  address: string;
  image: string;
};

const HotelCard = ({ name, price, address, image }: HotelCardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/hotel-detail/${1}`)}>
        <div>
          <img src={image} alt="Product" />
          <div className="font-semibold ">
            <div
              className="
          flex
          justify-between
          items-center
          gap-8
          p-2
         dark:text-white"
            >
              <p>{name}</p>
              <p
                className="
            rounded-[7px]
            p-1
            bg-secondary
            text-primary	
            dark:text-blue-700
            dark:bg-backgroundDark"
              >
                ${price}
              </p>
            </div>
          </div>
          <p
            className="
          text-textLight2nd
          dark:text-textDark2nd"
          >
            {address}
          </p>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
