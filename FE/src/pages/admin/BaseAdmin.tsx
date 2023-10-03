import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import type { MenuProps } from "antd";
import {
  Menu,
  Badge,
  Layout,
  Avatar,
  Popover,
  Dropdown,
  Breadcrumb,
} from "antd";

import { TbBrandBooking } from "react-icons/tb";
import { LiaHotelSolid } from "react-icons/lia";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  AiOutlineHdd,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";

import { Logo } from "../../components";

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const BaseAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      onClick: () => navigate(key.toString()),
    } as MenuItem;
  };

  const menuItems: MenuItem[] = [
    getItem("Dashboard", "/admin", <MdOutlineDashboardCustomize />),
    getItem("Đặt Phòng", "/admin/booking-manager", <TbBrandBooking />),
    getItem("Khách sạn", "/admin/hotel-manager", <LiaHotelSolid />),
    getItem("Loại phòng", "/admin/roomType-manager", <AiOutlineHdd />),
    getItem("Người dùng", "/admin/user-manager", <AiOutlineUser />),
  ];

  const selectedMenuItem: any = menuItems.find(
    (item) => item?.key === location.pathname
  );

  const breadcrumbItems = [
    {
      href: "/admin",
      title: (
        <p className="mt-1">
          <AiOutlineHome />
        </p>
      ),
    },
    {
      href: selectedMenuItem?.key,
      title: selectedMenuItem?.label,
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Cài đặt",
      icon: <AiOutlineSetting />,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Đăng xuất",
      icon: <AiOutlineLogout />,
      danger: true,
      onClick: () => alert("Đăng xuất"),
    },
  ];

  const content = (
    <>
      <p>Thông báo 1</p>
      <p>Thông báo 2</p>
      <p>Thông báo 3</p>
      <p>Thông báo 4</p>
      <p>Thông báo 5</p>
    </>
  );

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          collapsible={true}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="flex justify-center items-center">
            <Logo />
          </div>

          <Menu
            theme="light"
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            items={menuItems}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 30,
              display: "flex",
              background: "white",
              alignItems: "center",
              justifyContent: "right",
              gap: 30,
            }}
          >
            <Popover
              trigger="click"
              content={content}
              placement="bottomRight"
              className="cursor-pointer"
            >
              <Badge count={999} size="small">
                <IoNotificationsOutline size={22} />
              </Badge>
            </Popover>

            <Dropdown menu={{ items }} className="cursor-pointer">
              <Avatar size="large" src={<img src="/user.jpg" alt="avatar" />} />
            </Dropdown>
          </Header>

          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb
              style={{ margin: "16px 0" }}
              separator="/"
              items={breadcrumbItems}
            />

            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
              className="bg-light"
            >
              <Outlet />
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }} className="bg-white">
            Hotel ©2023 Created by Alone
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default BaseAdmin;
