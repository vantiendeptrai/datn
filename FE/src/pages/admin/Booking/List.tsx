import React, { useState } from "react";
import { Table, Button, Modal, } from "antd";
import type { ColumnsType,  } from "antd/es/Table";

const ListProduct = () => {
  // const [data, setData] = useState([]); // Dữ liệu danh sách đặt phòng
  // const [visible, setVisible] = useState(false); // Hiển thị modal xác nhận

  // const handleConfirm = (record: any) => {
  //   // Hiển thị modal xác nhận ở đây và xử lý khi người dùng xác nhận hoặc hủy
  //   // Sử dụng record để truy cập thông tin của đặt phòng cụ thể
  //   setVisible(true);
  // };

  // // Xử lý đóng modal xác nhận
  // const handleCancel = () => {
  //   setVisible(false);
  // };
  const dataSource = [
    {
      key: '1',
      customerName: 'Phạm cường này',
      room: 'Phòng đơn',
      bookingTime:'....'
    },
    {
      key: '2',
      customerName: 'Cường nhé',
      room:'Phòng đôi',
      bookingTime:'.....'
    },
  ];

  const columns = [
    {
      title: "Tên Khách Hàng",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Phòng Đặt",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Thời Gian Đặt",
      dataIndex: "bookingTime",
      key: "bookingTime",
    },
    {
      title: "Hành Động",
      key: "action",
        render: (record:any) => (
          <Button type="primary" danger onClick={() => handleConfirm(record)}>
            Xác Nhận
          </Button>
        ),
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />

      {/* Modal xác nhận */}
      <Modal
        title="Xác Nhận Đặt Phòng"
        // visible={visible}
        // onOk={handleConfirm} // Xử lý khi người dùng xác nhận
        // onCancel={handleCancel} // Xử lý khi người dùng hủy
      >
        {/* Hiển thị thông tin xác nhận đặt phòng ở đây */}
      </Modal>
    </div>
  //   <div>
  //      <Button>them</Button>
  // <Table dataSource={dataSource} columns={columns} />;
  
  //   </div>
  );
};

export default ListProduct;
