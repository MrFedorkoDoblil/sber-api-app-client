import React from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import useGlobalStore from './global.store';
import SBButton from './layout/components/Button/SBButton';
import { UISize } from './layout/types/uiTypes';
import AuthPage from './layout/components/AuthPage/AuthPage';

const { Header, Content, Footer } = Layout;

const modules: MenuProps['items'] = [
  {
    key: 'cards',
    label: 'Бизнесс карты'
  },
  {
    key: 'clients',
    label: 'Клиенты'
  },
  {
    key: 'products',
    label: 'Продукты'
  },
]

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   },
// );

const App: React.FC = () => {

  const isAuth = useGlobalStore((state) => state.isAuth);
  const content = isAuth
  ? 
  (
    <Layout>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={modules}
        style={{ flex: 1, minWidth: 0 }}
      />
      <SBButton
        actionType='login'
        onClick={() => {}}
        size={UISize.SM}
        variant='primary'
      />
    </Header>
    <Content style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Outlet/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      mrFedorko ©{new Date().getFullYear()} Created by Iliia Fedorko
    </Footer>
  </Layout>
  ) 
  :
  <AuthPage/>


  return content
};

export default App;