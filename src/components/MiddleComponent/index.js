import React from 'react';
import { TopHeader, QuickStats, Graphs } from "./../index";

const MiddleComponent = ({}) => (
  <div className="middleComponent">
    <TopHeader/>
    <QuickStats/>
    <Graphs serpChart/>
    <Graphs interactionChart/>
    <Graphs googleChangeChart/>
    <Graphs serpPositionChart/>
  </div>
);
export default MiddleComponent;