import React from 'react';
import './style.scss';
import { Stats } from './../index';

const TopRight = ({}) => (
  <div className="topRight margin-top margin-right">
    <h3 className="white bold">Keyword Rankings</h3>
    <div>
      <Stats
        stats = "2,496"
        pos = "Pos.1-10"
        risingNo = "1,005"
        fallingNo = "1,322"
        staticNo = "169"
      />
      <Stats
        stats = "4,778"
        pos = "Pos.11-20"
        risingNo = "2,080"
        fallingNo = "2,570"
        staticNo = "138"
      />
      <Stats
        stats = "20,137"
        pos = "Pos.21-&"
        risingNo = "9,204"
        fallingNo = "10,852"
        staticNo = "81"
      />
    </div>
  </div>
);
export default TopRight;