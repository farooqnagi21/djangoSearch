import React from "react";
import './style.scss';
import { Table } from 'antd';


const dataSource = [
  {
    key: '1',
    url: <a>/bulk-da-checker/</a>,
    clicks: '4,702',
    impressions: '341,990',
  },
  {
    key: '2',
    url: <a>/free-backlink/</a>,
    clicks: '578',
    impressions: '181,161',
  },
  {
    key: '3',
    url: <a>/</a>,
    clicks: '479',
    impressions: '9,981',
  },
  {
    key: '4',
    url: <a>/web-crawl/</a>,
    clicks: '479',
    impressions: '9,981',
  },
  {
    key: '5',
    url: <a>/rich-snippets/</a>,
    clicks: '58',
    impressions: '34,307',
  },
  {
    key: '6',
    url: <a>/link-building-services/</a>,
    clicks: '41',
    impressions: '72,491',
  },
  {
    key: '7',
    url: <a>/generate-robots-text/</a>,
    clicks: '38',
    impressions: '7,791',
  },
  {
    key: '8',
    url: <a>/robots-text-validator/</a>,
    clicks: '27',
    impressions: '12,657',
  },
  {
    key: '9',
    url: <a>/free-seo-audit/</a>,
    clicks: '24',
    impressions: '62,464',
  },
  {
    key: '10',
    url: <a>/rich-snippets/</a>,
    clicks: '58',
    impressions: '34,307',
  },
];

const columns = [
  {
    title: 'URL',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
    key: 'clicks',
  },
  {
    title: 'Impressions',
    dataIndex: 'impressions',
    key: 'impression',
  },
];

const TopPagesTable = ({}) => (
  <div className="topPage">
    <label className="padding-left white bold">Top Pages</label>

    <Table className="top-pages-table"
           pagination= {false}
           dataSource={dataSource}
           columns={columns} />
  </div>
);
export default TopPagesTable;