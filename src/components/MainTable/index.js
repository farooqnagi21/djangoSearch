import React from 'react';
import './style.scss';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Keywords',
    dataIndex: 'name',
    key: 'name',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'SERP',
    dataIndex: 'age',
    key: 'age',
    sorter:{}
  },
  {
    title: 'Clicks',
    dataIndex: 'address',
    key: 'address',
    sorter:{}
  },
  {
    title: 'Impressions',
    dataIndex: 'age',
    key: 'age',
    sorter:{}
  },
  {
    title: 'CPC',
    dataIndex: 'age',
    key: 'age',
    sorter:{}
  },
  {
    title: 'Volume',
    dataIndex: 'age',
    key: 'age',
    sorter:{}
  },
  {
    title: 'Keyword Groups',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => (
          <Tag color="FFF" className="tags" key={tag}>
            {tag.toUpperCase()}
          </Tag>
        ))}
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '4',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '5',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '7',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '8',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '10',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '11',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['SERP>16'],
  },
  {
    key: '12',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['SERP>16'],
  },
];


const MainTable = ({}) => (
  <div className="mainTable-div">
    <Table className="mainTable"
           rowSelection
           columns={columns}
           dataSource= {data} />
  </div>
);
export  default  MainTable;