import { Table} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from "antd/es/radio";

const BookingManager = () => {
  <h1>PHÒNG MỚI ĐẶT</h1>;
  const dataSource = [
    {
      key: "1",
      customerName: "Phạm cường này",
      room: "Phòng đơn ",

    },
    {
      key: "2",
      customerName: "Cường nhé",
      room: "Phòng đôi",
   
    },
    {
      key: "3",
      customerName: "Cường nhé",
      room: "Phòng đôi",

    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: "Thông Tin Khách Hàng",
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
          <h3>Tổng:</h3>
        </div>
      ),
    },
    {
      title: "Thông Tin Phòng Đặt",
      dataIndex: "bookingTime",
      key: "bookingTime",
      render: () => (
        <div>
          <h3>Ngày vào: </h3>
          <h3>Ngày trả:</h3>
          <h3>Thời gian:</h3>
          <h3>Ngày đặt:</h3>
        </div>
      ),
    },
    {
      title: "Hành Động",
      key: "action",
      render: (record: any) => (
        <div>
          <div className="mb-3">
            <Button type="primary" onClick={() => (record)}>
            {/* handleConfirm */}
              Xác nhận đặt phòng
            </Button>
          </div>
          <div>
            <Button type="primary" onClick={() => (record)}>
              {/* handleConfirm */}
              Hủy đặt phòng
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default BookingManager;
