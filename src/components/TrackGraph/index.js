import React from "react";
import './style.scss';
import { Checkbox } from 'antd';


const TrackGraph = ({
  serps = false,
  interactions = false,
  googleChange = false,
  serpsPosition = false,
  serpKeyword = false,

}) => (
  <div className="trackGraph">
    {serps && <span className="flex-column">
      <label className="f16 white bold">Track your SERPs</label>
      <label className="padding-top white08 f12">View your site's SERP scores.</label>
      <label className="padding-top white08 f12">Select or deselect each option below to populate data on graph.</label>
      <span className="flex-column padding-top">
        <Checkbox className="white" style={{color:"#feb342"}}>SERP 1-3</Checkbox>
        <Checkbox className="white" style={{color:"#ffde62"}}>SERP 4-10</Checkbox>
        <Checkbox className="white" style={{color:"#acd45e"}}>SERP 11-20</Checkbox>
        <Checkbox className="white" style={{color:"#02851f"}}>SERP 21-100</Checkbox>
      </span>
    </span>}

    {interactions && <span className="flex-column">
      <label className="f16 white bold">Track your Interactions</label>
      <label className="padding-top white08 f12">View your site's clicks, Impressions and CTR.</label>
      <label className="padding-top white08 f12">Select or deselect each option below to populate data on graph.</label>
      <span className="flex-column padding-top">
        <Checkbox className="white" style={{color:"#6778dc"}}>Clicks</Checkbox>
        <Checkbox className="white" style={{color:"#71ccae"}}>Impressions</Checkbox>
        <Checkbox className="white" style={{color:"#3acbda"}}>CTR</Checkbox>
        <Checkbox className="white" style={{color:"#f2a893"}}>Economic Value of Traffic</Checkbox>
      </span>
    </span>}

    {googleChange && <span className="flex-column">
      <label className="f16 white bold">Google Change</label>
      <label className="white08 f12 padding-top">View how many ranking positions your site has changed cumulative.</label>
    </span>}

    {serpsPosition && <span className="flex-column">
      <label className="f16 white bold">SERP Position based on AVG. Clicks & CTR</label>
      <label className="white08 f12 pt-10">Compare your site's SERP position based on the avg. clicks you receive and CTR %.</label>
      <label className="white08 f12 pt-10">Select or deselect each option below to populate data on graph.</label>
      <span className="flex-column pt-10">
        <Checkbox className="white" style={{color:"#6778DC"}}>Avg. Clicks</Checkbox>
        <Checkbox className="white" style={{color:"#FEB342"}}>Avg. CTR</Checkbox>
      </span>
    </span>}

    {serpKeyword && <span className="flex-column">
      <label className="f16 white bold">SERP Position based on Keyword Group</label>
      <label className="white08 f12 pt-10">View how certain keyword groupings rank compared to others.</label>
      <label className="white08 f12 padding-top">How to create a keyword group:</label>
      <label className="white08 f12 pt-10">1. Select the keywords from the chart below. You can select them on the left side of each keyword.</label>
      <label className="white08 f12 pt-10">2. Once keywords are selected, click the "Assign Group" button on the top right corner.</label>
      <label className="white08 f12 pt-10">3. Type in a name for the keyword group and press create.</label>
      <label className="white08 f12 pt-10">4. Your data is now populated.</label>
    </span>}
  </div>
);
export default TrackGraph;