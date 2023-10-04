import {
  AiFillTag,
  AiOutlineFieldTime,
  AiOutlineFacebook,
  AiFillTwitterCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";

const ComplaintResolutionPolicy = () => {
  return (
    <div className="max-w-7xl m-auto my-4">
      <h1 className="font-bold text-xl">CHÍNH SÁCH GIẢI QUYẾT KHIẾU NẠI</h1>
      <div className="my-4 flex">
        <span className="flex gap-2 items-center">
          <AiFillTag />
          <p>Tin tưc du lịch</p>
          <AiOutlineFieldTime />
          <p>2023-11-02 ~ 2023-11-02</p>
          <AiOutlineShareAlt />
          <AiOutlineFacebook />
          <AiFillTwitterCircle />
        </span>
      </div>
      <hr />

      <div className="gap-y-4 flex flex-col mt-4">
        <ul>
          <ol>
            Các biện pháp và cơ chế giải quyết tranh chấp khiếu nại trên website
            <ul>
              <ol>Tự thỏa thuận</ol>
              <ol>Đưa ra cơ quan pháp luật</ol>
              <ol>Hình thức khác</ol>
            </ul>
          </ol>
        </ul>

        <p>
          Mường Thanh chịu trách nhiệm giải quyết khiếu nại của Khách hàng liên
          quan đến sản phẩm/dịch vụ do Mường Thanh cung cấp trên trang web
          www.muongthanh.com
        </p>

        <p>
          Mường Thanh sẽ tiếp nhận/ xử lý các khiếu nại phát sinh sau khi nhận
          được thông báo từ khàng hàng đối với giao dịch mua sản phẩm/dịch vụ
          trên trang web www.muongthanh.com
        </p>

        <p>
          Khách hàng có quyền yêu cầu cơ quan có thẩm quyền bảo vệ trong trường
          hợp tranh chấp với Mường Thanh không được giải quyết thỏa đáng.{" "}
        </p>

        <p>
          Trong trường hợp cụ thể, chúng tôi sẽ: yêu cầu khách hàng cần có trách
          nhiệm cung cấp chính xác các thông tin vô hình và hữu hình về vấn đề
          khiếu nại, mâu thuẫn đang phát sinh cần giải quyết mà Khách hàng đã tự
          thấy mình bị thiệt hại.{" "}
        </p>
        <div>
          <u className="font-bold">
            Mường Thanh sẽ thực hiện giải quyết các tranh chấp theo quy trình
            sau:
          </u>
        </div>
        <span>
          <u className="font-bold text-lg">Bước 1:</u>
          <p>
            Bộ phận Chăm Sóc Khách Hàng của Mường Thanh sẽ tiếp nhận các khiếu
            nại của Thành viên hoặc Bộ phận Kinh doanh sẽ tiếp nhận các khiếu
            nại của Khách hàng. Các Bộ phận này chủ động giải quyết nhanh chóng
            và trả lời ngay kết quả giải quyết các khiếu nại trên cơ sở các
            Chính sách mà Mường Thanh đã công bố.
          </p>
        </span>

        <span>
          <u className="font-bold text-lg">Bước 2:</u>
          <p>
            Bộ phận Chăm Sóc Khách Hàng của Mường Thanh sẽ tiếp nhận các khiếu
            nại của Thành viên hoặc Bộ phận Kinh doanh sẽ tiếp nhận các khiếu
            nại của Khách hàng. Các Bộ phận này chủ động giải quyết nhanh chóng
            và trả lời ngay kết quả giải quyết các khiếu nại trên cơ sở các
            Chính sách mà Mường Thanh đã công bố.
          </p>
        </span>

        <span>
          <u className="font-bold text-lg">Bước 3:</u>
          <p>
            Bộ phận Chăm Sóc Khách Hàng của Mường Thanh sẽ tiếp nhận các khiếu
            nại của Thành viên hoặc Bộ phận Kinh doanh sẽ tiếp nhận các khiếu
            nại của Khách hàng. Các Bộ phận này chủ động giải quyết nhanh chóng
            và trả lời ngay kết quả giải quyết các khiếu nại trên cơ sở các
            Chính sách mà Mường Thanh đã công bố.
          </p>
        </span>

        <u className="font-bold">Mọi thắc mắc xin liên hệ: </u>
        <p className="font-bold">Công ty Cổ phần Tập đoàn Mường Thanh</p>
        <p>
          Địa chỉ giao dịch tại Hà Nội: Lô CC5, Bán đảo Linh Đàm, Phường Hoàng
          Liệt, Quận Hoàng Mai, Thành phố Hà Nội, Việt Nam
        </p>
        <p>Email: info@muongthanh.vn</p>
        <p>Hotline: 1900 1833</p>
      </div>
    </div>
  );
};

export default ComplaintResolutionPolicy;
