import React from 'react';
import './style.scss';
import { MiddleStat } from './../index'

const QuickStats =({}) => (
  <div className="margin-top quickStats">
    <MiddleStat
      peopleIcon
      mainText="Impressions"
      countText="1M"
      risingNo="8.8"
    />
    <MiddleStat
      rankIcon
      mainText="Rank Change"
      countText="49"
      fallingNo="1.2"
    />
    <MiddleStat
      clickIcon
      mainText="Clicks"
      countText="7k"
      risingNo="1.7"
    />
    <MiddleStat
      commentIcon
      mainText="Total Keywords"
      countText="24k"
      risingNo="5.2"
    />
  </div>
);
export default QuickStats;