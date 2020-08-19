import React from 'react';
import { TopRight, TopPagesTable, ShortStats, ScheduleCall } from './../index';


const RightComponent = ({}) => (
  <div className="rightComponent">
    <TopRight/>
    <TopPagesTable/>
    <ShortStats mainText="Google Rankings" countText="439" risingNo="8.8"/>
    <ShortStats mainText="Google Change" countText="895" risingNo="9.8"/>
    <ScheduleCall/>
  </div>
);
export default RightComponent;