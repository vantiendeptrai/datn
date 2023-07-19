import { Attractive, Carousel, Container, Detail } from "../../../components";

const HomePage = () => {
  const listImage = [
    {
      url: "/images/carousel/du-lich-kham-pha-1.jpg",
    },
    {
      url: "/images/carousel/du-lich-kham-pha-2.jpg",
    },
    {
      url: "/images/carousel/du-lich-kham-pha-3.jpg",
    },
  ];

  const data = [
    {
      title: "Đậm đà",
      label: "Bản sắc việt",
      content: "Relaxing moments",
      src: "/images/detail/detail-1.jpg",
      description:
        "Khởi nguồn từ vùng đất Điện Biên lịch sử, nơi mang đậm phong cách của dân tộc Thái vùng Tây Bắc, mỗi khách sạn Mường Thanh đều thừa hưởng nét tinh tế trong cái nôi văn hóa ấy, từ hoa ban, váy thái, đến rượu táo mèo, xôi nếp nương. Khi nhớ đến Mường Thanh, du khách sẽ nhớ đến màu sắc thuần Việt, tạo nên bởi sự giao thoa giữa văn hóa đặc trưng của vùng núi Tây Bắc và dịch vụ chân thành trong nụ cười hồn hậu của con người Việt Nam.",
    },

    {
      title: "Hệ thống khách sạn tư nhân",
      label: "Lớn nhất Việt Nam",
      content: "Touching sincerity",
      src: "/images/detail/detail-2.jpg",
      description:
        "Mường Thanh được chứng nhận là “Chuỗi khách sạn tư nhân lớn nhất Đông Dương” với hệ thống trên 60 khách sạn phủ hơn 40 tỉnh thành từ Bắc vào Nam và nước bạn Lào. Trên muôn nẻo hành trình khám phá Việt Nam, du khách có thể lựa chọn Mường Thanh là điểm dừng chân lý tưởng, hoàn toàn yên tâm về sản phẩm đồng nhất và các dịch vụ đa dạng theo nhu cầu.",
      reverse: true,
    },
  ];

  return (
    <>
      <Carousel auto listImage={listImage} />

      <Container>
        <Attractive />

        <Detail data={data} />
      </Container>
    </>
  );
};

export default HomePage;
