import React from "react";
import './style.scss';
import { BsArrowDown,BsArrowUp } from 'react-icons/bs';
import { TiArrowSortedUp } from 'react-icons/ti';

const ShortStats = ({
  mainText= '',
  countText= '',
  risingNo= '',
  fallingNo= '',

}) =>(
  <div className="shortStat margin-top margin-right">
    <span className="flex-column">
      <label className="f16 white bold">{mainText}</label>
      {mainText==="Google Change" ?
        <span><TiArrowSortedUp className="rising"/><label className="stats rising bold">{countText}</label></span> :
        <label className="stats white bold">{countText}</label>}
    </span>
    <span className="flex-column">
      {risingNo && <span className="flex-center"><BsArrowUp className="rising bold"/><label className="white f12 rising">{risingNo+"%"}</label></span>}
      {fallingNo && <span className="flex-center"><BsArrowDown className="falling bold"/><label className="white f12 falling">{fallingNo+"%"}</label></span>}
      <label className="f12 white">from prior period</label>
    </span>
  </div>
);
export default ShortStats