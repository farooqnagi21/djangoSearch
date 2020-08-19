import React from 'react';
import './style.scss';
import { Select, DatePicker, Space } from "antd";
import moment from "moment";
import {CustomSelect} from "../index";
import { CalendarOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = 'MM/DD/YYYY';
const options = ["linkgraph.io","linkgraph.net"]

const TopHeader =({}) => (
  <div className="topHeader margin-top">
    <CustomSelect
      defaultValue= {options[0]}
      icon
      label="WEBSITE"
      onChange={()=> console.log("item selected")}
    >
      {
        options.map((link, i) => {return(
          <Option key={i} value={link}>{link}</Option>);
        })
      }
    </CustomSelect>

    <div className="flex-column">
      <span>
        <CalendarOutlined className="white" />
        <label className="white pl5">TIME PERIODS</label>
      </span>
      <div>
        <Space direction="horizontal">
          <RangePicker
            defaultValue={[moment('01/01/2020', dateFormat), moment('01/01/2020', dateFormat)]}
            format={dateFormat}
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
          />
          <RangePicker
            // defaultValue={[moment('01/01/2015', dateFormat), moment('01/01/2015', dateFormat)]}
            format={dateFormat}
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
          />
        </Space>
      </div>
    </div>

  </div>
);
export default TopHeader;
