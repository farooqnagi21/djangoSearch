import React from "react";
import './style.scss';
import { CustomButton } from './../index';


const ScheduleCall = ({}) => (
  <div className="scheduleCall flex-column">
    <h2 className="white bold">Ready to improve your site?<br/>We're ready to help.</h2>
    <p className="white padding-top">Schedule a free call with one of our experts to find out how you can crush your competitors.</p>
    <CustomButton className="scheduleBtn bold" size="large">Schedule a Call</CustomButton>

  </div>
);
export default ScheduleCall;