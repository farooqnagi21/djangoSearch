import React from 'react';
import { Tabs, Input } from "antd";
import { MainTable, CustomButton, CustomSelect } from './../index';
import {FiSearch} from 'react-icons/fi';
import './style.scss';

const { TabPane } = Tabs;

const CustomTabs = ({}) => (
  <div >
    {/*<CustomButton>Assign Group</CustomButton>*/}
    <Tabs defaultActiveKey="1" >
      <TabPane tab="Search Terms" key="1">
        <div className="table-search">
          <Input placeholder="Search by Keyword" prefix={<FiSearch/>} />
          <CustomSelect label="" placeholder="SERP: Any"></CustomSelect>
          <CustomSelect label="" placeholder="Clicks: Any"></CustomSelect>
          <CustomSelect label="" placeholder="Impressions: Any"></CustomSelect>
          <CustomSelect label="" placeholder="Volume: Any"></CustomSelect>
        </div>
        <MainTable/>
      </TabPane>
      <TabPane tab="Pages" key="2">
        <h3 className="white padding-top">Content of Pages, Coming Soon...</h3>
      </TabPane>
    </Tabs>
  </div>
);
export default CustomTabs;