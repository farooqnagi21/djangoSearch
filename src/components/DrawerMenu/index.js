import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';
import { CustomButton } from './../index';
import { FiActivity, FiLock } from 'react-icons/fi';
import { RiseOutlined, LockOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

const DrawerMenu = () => (
  <div className="menu">
    <div>
      <h1 className="white logo">linKgraph</h1>
    </div>
    <Menu
      mode="inline"
      className="menu"
    >

      <Menu.Item icon={<FiActivity/>}>
        <label className="menuItem-icon">Google Search Console</label>
      </Menu.Item>
      <SubMenu
        key="subMenu"
        title={
          <span>Unlock All Features Below</span>
        }
      >
        {/*<Menu.Item>*/}
        {/*  <label>SubMenu Items</label>*/}
        {/*</Menu.Item>*/}
      </SubMenu>

      <Menu.ItemGroup title="Domain Tools" >
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Keyword Tracker</label>
        </Menu.Item>
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Site Crawler</label>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup title="Content Tools" >
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Copy Optimizer</label>
        </Menu.Item>
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Focus Terms</label>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup title="Backlink Tools" >
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Backlink Analyzer</label>
        </Menu.Item>
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Bulk DA Checker</label>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup title="Customer Tools" >
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Order Tracking</label>
        </Menu.Item>
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Place Order</label>
        </Menu.Item>
        <Menu.Item icon={<FiLock />}>
          <label className="menuItem-icon">Expert Review</label>
        </Menu.Item>
      </Menu.ItemGroup>

    </Menu>

    <CustomButton size="large" className="signUp-btn" >SignUp for Free</CustomButton>
  </div>
);
export default DrawerMenu;