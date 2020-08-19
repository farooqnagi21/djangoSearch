import React from 'react';
import { Row, Col, } from "antd";
import { DrawerMenu, MiddleComponent, RightComponent, Graphs, CustomTabs } from "./components";

const MainPage = ({}) => (
  <Row>
    <Row gutter={16}>
      <Col xs={24} xl={5}><DrawerMenu/></Col>
      <Col xs={24} xl={13}><MiddleComponent/></Col>
      <Col xs={24} xl={6}><RightComponent/></Col>
    </Row>
    <Row gutter={16}>
      <Col xs={24} xl={5}></Col>
      <Col xs={24} xl={19}>
        <Graphs serpKeywordChart/>
        <CustomTabs/>
      </Col>
    </Row>
  </Row>

);
export default MainPage;