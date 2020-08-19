import React from 'react';
import './style.scss';
import { FaRegCommentDots, } from 'react-icons/fa';
import { BsPeopleFill,BsArrowDown,BsArrowUp } from 'react-icons/bs';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { GiArrowCursor } from 'react-icons/gi';



const MiddleStat = ({
  mainText ='',
  countText ='',
  risingNo ='',
  fallingNo ='',
  commentIcon = false,
  peopleIcon = false,
  rankIcon = false,
  clickIcon = false,

}) =>(
  <div className="middleStat">
    <div className="padding-left">
      <div className="icon-div">
        {peopleIcon && <BsPeopleFill className="icon" />}
        {rankIcon && <RiArrowUpDownLine className="icon" />}
        {clickIcon && <GiArrowCursor className="icon" />}
        {commentIcon && <FaRegCommentDots className="icon" />}
      </div>
        <label className="f16 white bold">{mainText}</label>
        <h2 className="white bold">{countText}</h2>
      <span className="flex-column">
        {risingNo && <span className="flex-center"><BsArrowUp className="rising bold"/><label className="white f12 rising">{risingNo+"%"}</label></span>}
        {fallingNo && <span className="flex-center"><BsArrowDown className="falling bold"/><label className="white f12 falling">{fallingNo+"%"}</label></span>}
        <label className="f12 white">from prior period</label>
    </span>
    </div>

  </div>
);
export default MiddleStat;