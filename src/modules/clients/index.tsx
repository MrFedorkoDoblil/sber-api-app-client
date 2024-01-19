import React from 'react'

import { Layout, Menu, MenuProps, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import { Outlet, useNavigate } from 'react-router-dom'



function Clients() {
  const navigate = useNavigate();
  
  const items: MenuProps['items'] = [
    {
      key: 'option1',
      label:'option 1',
      onClick: () => {navigate('/clients/clientContent')}
    },
    {
      key: 'option2',
      label:'option 2',
      onClick: () => {navigate('/clients/option2')}
    },
    {
      key: 'option3',
      label:'option 3',
      onClick: () => {navigate('/clients/option3')}
    },
    {
      key: 'option4',
      label:'option 4',
      onClick: () => {navigate('/clients/option4')}
    },
    {
      key: 'option5',
      label:'option 5',
      onClick: () => {navigate('/clients/option5')}
    }
  ] 

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
    >
      <Sider style={{ background: colorBgContainer }} width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
          items={items}
        />
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Outlet/>
      </Content>
    </Layout>
  )
}

export default Clients