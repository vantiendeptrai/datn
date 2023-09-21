// import { Table, } from "antd";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
const ProfileBookingManage = () => {
  <h1>HỒ SƠ ĐẶT PHÒNG</h1>
  const dataSource = [
    {
      key: "1",
      customerName: "Phạm cường này",
      room: "Phòng đơn ",
      tags: ["Đã xác nhận đặt phòng"],
    },
    {
      key: "2",
      customerName: "Cường nhé",
      room: "Phòng đôi",
      tags: ["Đã thanh toán"],
    },
    {
      key: "3",
      customerName: "Cường nhé",
      room: "Phòng đôi",
      tags: ["Đã hủy"],
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: "Khách Hàng",
      dataIndex: "customerName",
      key: "customerName",
      render: () => (
        <div>
          <div></div>
          <h3>Tên:</h3>
          <h3>Điện thoại:</h3>
        </div>
      ),
    },
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
      render: () => (
        <div>
          <h3>Phòng:</h3>
          <h3>Giá:</h3>
        </div>
      ),
    },
    {
      title: "Chi Tiết Phòng Đặt",
      dataIndex: "bookingTime",
      key: "bookingTime",
      render: () => (
        <div>
          <h3>Ngày: </h3>
          <h3>Ngày vào:</h3>
          <h3>Ngày trả:</h3>
          <h3>Thanh toán:</h3>
        </div>
      ),
    },
    {
      title: "Trạng Thái",
      dataIndex: "bookingTime",
      key: "bookingTime",
      render: (_, { tags }) => (
        <>
          {tags.map((tag: any) => {
            let color;
            if (tag.length >= 14) {
              color = "purple"; // Chọn màu purple cho từ 13 ký tự trở lên
            } else if (tag.length >= 7) {
              color = "green"; // Chọn màu green cho từ 5 ký tự trở lên
            } else {
              color = "red"; // Chọn màu red cho dưới 5 ký tự
            }
            // if (tag === "loser") {
            //   color = "volcano";
            // }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: "Hành Động",
      key: "action",
      // render: (record:any) => (
      //   <Button type="primary" danger onClick={() => handleConfirm(record)}>
      //     Xác Nhận
      //   </Button>
      // ),
    },
  ];

 
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ProfileBookingManage;
