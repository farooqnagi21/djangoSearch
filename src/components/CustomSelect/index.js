import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import {AiOutlineGlobal} from 'react-icons/ai';
import './style.scss';

const CustomSelect = (
  {
    children = null,
    className = '',
    onChange = null,
    size = 'large',
    defaultValue = null,
    label = 'null',
    value = '',
    placeholder = '',
    icon = false,
  },
) => (
  <div className="flex-column">
      <span className="flex-center">
        {icon && <AiOutlineGlobal className="white" />}
        {label && <text className="white pl5">{label}</text>}
      </span>
    <Select
      className={className}
      onChange={(event) => { onChange(event); }}
      defaultValue={defaultValue}
      size={size}
      // value={value}
      placeholder={placeholder}
    >
      {children}
    </Select>
  </div>
);
export default CustomSelect;
