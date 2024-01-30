import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useGlobalStore from './global.store';

import AuthPage from './modules/auth/AuthPage/AuthPage';
import {
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

type MenuItems = Required<MenuProps>['items'];
type GetItemArg = {
  link: string;
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItems[number];
}

function useGetItem(
  arr: GetItemArg[]
): MenuItems {
  const navigate = useNavigate()
  return arr.map(({key, label, link, children, icon}) => {
    return {
      key,
      icon,
      children,
      label,
      onClick: () => {
        navigate(link)
      }
  }}) as MenuItems;
}

const App: React.FC = () => {
  const items = useGetItem([
    {key: 1, label: 'Главная', link: '/', icon: <UserOutlined />,},
    {key: 2, label: 'Клиенты', link: '/clients', icon: <UserOutlined />,},
    {key: 3, label: 'Транзакции', link: '/transactions', icon: <UserOutlined />,}
  ])
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const isAuth = useGlobalStore((state) => state.isAuth);
  const content = isAuth
  ? 
  <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  :
  <AuthPage/>


  return content
};

export default App;