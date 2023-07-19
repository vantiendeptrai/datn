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

  return (
    <>
      <Carousel auto listImage={listImage} />

      <Container>
        <Attractive />

        <Detail />
      </Container>
    </>
  );
};

export default HomePage;
