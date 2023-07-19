import { DetailCard } from "../..";

const Detail = () => {
  const data = [
    {
      title: "Đậm đà",
      label: "Bản sắc việt",
      src: "/images/detail/detail-1.jpg",
      description:
        "Khởi nguồn từ vùng đất Điện Biên lịch sử, nơi mang đậm phong cách của dân tộc Thái vùng Tây Bắc, mỗi khách sạn Mường Thanh đều thừa hưởng nét tinh tế trong cái nôi văn hóa ấy, từ hoa ban, váy thái, đến rượu táo mèo, xôi nếp nương. Khi nhớ đến Mường Thanh, du khách sẽ nhớ đến màu sắc thuần Việt, tạo nên bởi sự giao thoa giữa văn hóa đặc trưng của vùng núi Tây Bắc và dịch vụ chân thành trong nụ cười hồn hậu của con người Việt Nam.",
    },

    {
      title: "Hệ thống khách sạn tư nhân",
      label: "Lớn nhất Việt Nam",
      src: "/images/detail/detail-2.jpg",
      description:
        "Mường Thanh được chứng nhận là “Chuỗi khách sạn tư nhân lớn nhất Đông Dương” với hệ thống trên 60 khách sạn phủ hơn 40 tỉnh thành từ Bắc vào Nam và nước bạn Lào. Trên muôn nẻo hành trình khám phá Việt Nam, du khách có thể lựa chọn Mường Thanh là điểm dừng chân lý tưởng, hoàn toàn yên tâm về sản phẩm đồng nhất và các dịch vụ đa dạng theo nhu cầu.",
      reverse: true,
    },
  ];

  return (
    <>
      <div
        className="
        flex
        flex-col
        md:flex-row
        py-5
        relative
        gap-0.5
        transition-all
        duration-300
        ease-linear"
      >
        {data.map((item) => (
          <DetailCard
            src={item.src}
            title={item.title}
            label={item.label}
            description={item.description}
            reverse={item.reverse}
          />
        ))}
      </div>
    </>
  );
};

export default Detail;
