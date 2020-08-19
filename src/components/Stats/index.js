import React from 'react';
import './style.scss';

const Stats = ({
  stats = '',
  pos = '',
  risingNo = '',
  fallingNo = '',
  staticNo = '',
}) =>(
  <div className="flex-sb padding-top align-items">
    <div className="flex-column">
      <label className="stats white bold">{stats}</label>
      <label className="f12 white">{pos}</label>
    </div>
    <div className="flex-column">
      <label className="f12 rising bold">{risingNo}</label>
      <label className="f9 white">Rising</label>
    </div>
    <div className="flex-column">
      <label className="f12 falling bold">{fallingNo}</label>
      <label className="f9 white">Falling</label>
    </div>
    <div className="flex-column">
      <label className="f12 white bold">{staticNo}</label>
      <label className="f9 white">Static</label>
    </div>
  </div>
);
export default Stats;