import { createFileRoute } from '@tanstack/react-router'
import { useState, useCallback } from 'react';
import { Form, Input, Button, Table } from 'antd'

const credentials = {
  userName: '123123',
  password: '123123'
}

const data: {name: string; nick: string, age: number, key: number}[] = [
  {
    name: 'Ilya Fedorko',
    nick: 'mrfedorko',
    age: 29,
    key: 1,
  },
  {
    name: 'Ilya Tek',
    nick: 'mrTek',
    age: 27,
    key: 2,
  },
  {
    name: 'Ilya Fedorko',
    nick: 'mrfedorko',
    age: 290,
    key: 3,
  },
  {
    name: 'Ilya Tek',
    nick: 'mrTek',
    age: 271,
    key: 4,
  },
]


function CustomTabel() {
  
 
 const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'key',
    render: (n: string) => {
      return <a href={`http://localhost:5173/${n}`}>{n}</a>
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'key',
    sorter: (a: any, b: any ) => a.age - b.age 
  },
  {
    title: 'Nick',
    dataIndex: 'nick',
    key: 'key'
  }
 ]


 return(
  <>
    <Table
      dataSource={data}
      columns={columns}
    />
  </>
 )
  
}

export const Route = createFileRoute('/table')({
  component: () => <CustomTabel/>
})