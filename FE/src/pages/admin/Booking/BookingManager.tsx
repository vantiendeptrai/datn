import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import { Link } from "react-router-dom";
import ListProduct from "./List";

const { Header, Content, Sider } = Layout;

const BookingManager = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "2",
              // icon: <AiOutlineVideoCamera />,
              label: <Link to="/admin/amenities-manager">Amenities</Link>,
            },
            {
              key: "3",
              // icon: <AiOutlineVideoCamera />,
              label: <Link to="/admin/booking-manager">Booking</Link>,
            },
            {
              key: "1",
              // icon: <AiOutlineVideoCamera />,
              label: <Link to="/admin/">Dashboard</Link>,
            },
            {
              key: "4",
              // icon: <AiOutlineVideoCamera />,
              label: <Link to="/admin/hotel-manager">Hotel</Link>,
            },
            {
              key: "5",
              // icon: <AiOutlineVideoCamera />,
              label: <Link to="/admin/roomType-manager">RoomType</Link>,
            },
            {
              key: "6",
              // icon: <AiOutlineVideoCamera />,
              label: <Link to="/admin/user-manager">User</Link>,
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <Button icon={<PlusOutlined />}>Create new Booking</Button>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ListProduct />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BookingManager;
