import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import { Container, FooterCard } from "../..";

const FooterCenter = () => {
  const data = [
    {
      title: "Điều khoản",
      links: [
        {
          label: "Điều khoản chung",
          url: "dkc",
        },
      ],
    },
    {
      title: "Chính sách",
      links: [
        {
          label: "Chính sách giải quyết tranh chấp",
          url: "csgqtc",
        },
        {
          label: "Chính sách quyền riêng tư",
          url: "csqrt",
        },
      ],
    },
    {
      title: "Quy định",
      links: [
        {
          label: "Quy định chung",
          url: "qdc",
        },
        {
          label: "Quy định về thanh toán",
          url: "qdvtt",
        },
        {
          label: "Quy định về xác nhận thông tin đặt phòng",
          url: "qdvxnttdp",
        },
      ],
    },
    {
      title: "Liên hệ",
      links: [
        {
          label: "tranluong460@gmail.com",
          url: "tranluong460@gmail.com",
          icon: AiOutlineMail,
        },
        {
          label: "0367370371",
          url: "0367370371",
          icon: AiOutlinePhone,
        },
      ],
    },
  ];

  return (
    <>
      <div
        className="
        py-6
        border-t-2
        border-divideLight
        dark:border-divideDark"
      >
        <Container>
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-5"
          >
            {data.map((data) => (
              <FooterCard key={data.title} data={data} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterCenter;
