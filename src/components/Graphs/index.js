import React from "react";
import './style.scss';
import { TrackGraph } from './../index';
import {
  ResponsiveContainer, ComposedChart, BarChart, Bar, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label,
} from 'recharts';

const data = [
  {
    name: 'Jun26', uv: 4000, pv: 2400, sv:1000, tv: 5090, amt: 2400,
  },
  {
    name: 'Jun27', uv: 3000, pv: 1398, sv:1000, tv: 5020, amt: 2210,
  },
  {
    name: 'Jun28', uv: 2000, pv: 9800, sv:1000, tv: 1500, amt: 2290,
  },
  {
    name: 'Jun29', uv: 2780, pv: 3908, sv:1000, tv: 2500, amt: 2000,
  },
  {
    name: 'Jun30', uv: 1890, pv: 4800, sv:1000, tv: 4500, amt: 2181,
  },
  {
    name: 'July1', uv: 2390, pv: 3800, sv:1000, tv: 5060, amt: 2500,
  },
  {
    name: 'July2', uv: 3490, pv: 4300, sv:1000, tv: 5040, amt: 2100,
  },
  {
    name: 'July3', uv: 4000, pv: 2400, sv:1000, tv: 5003, amt: 2400,
  },
  {
    name: 'July4', uv: 3000, pv: 1398, sv:1000, tv: 5003, amt: 2210,
  },
  {
    name: 'July5', uv: 2000, pv: 9800, sv:1000, tv: 1500, amt: 2290,
  },
  {
    name: 'July6', uv: 2780, pv: 3908, sv:1000, tv: 5900, amt: 2000,
  },
  {
    name: 'July7', uv: 1890, pv: 4800, sv:1000, tv: 4200, amt: 2181,
  },
  {
    name: 'July8', uv: 2390, pv: 3800, sv:1000, tv: 1300, amt: 2500,
  },
  {
    name: 'July9', uv: 3490, pv: 4300, sv:1000, tv: 3700, amt: 2100,
  },
  {
    name: 'July10', uv: 4000, pv: 2400, sv:1000, tv: 1750, amt: 2400,
  },
  {
    name: 'July11', uv: 3000, pv: 1398, sv:1000, tv: 2100, amt: 2210,
  },
  {
    name: 'July12', uv: 2000, pv: 9800, sv:1000, tv: 4200, amt: 2290,
  },
  {
    name: 'July13', uv: 2780, pv: 3908, sv:1000, tv: 1632, amt: 2000,
  },
  {
    name: 'July14', uv: 1890, pv: 4800, sv:1000, tv: 2000, amt: 2181,
  },
  {
    name: 'July15', uv: 2390, pv: 3800, sv:1000, tv: 5000, amt: 2500,
  },
  {
    name: 'July16', uv: 3490, pv: 4300, sv:1000, tv: 5030, amt: 2100,
  },
  {
    name: 'July17', uv: 2780, pv: 3908, sv:1000, tv: 5001, amt: 2000,
  },
  {
    name: 'July18', uv: 1890, pv: 4800, sv:1000, tv: 2500, amt: 2181,
  },
  {
    name: 'July19', uv: 2390, pv: 3800, sv:1000, tv: 4500, amt: 2500,
  },
  {
    name: 'July20', uv: 3490, pv: 4300, sv:1000, tv: 5040, amt: 2100,
  },
  {
    name: 'July21', uv: 2780, pv: 3908, sv:1000, tv: 5004, amt: 2000,
  },
  {
    name: 'July22', uv: 1890, pv: 4800, sv:1000, tv: 5700, amt: 2181,
  },
  {
    name: 'July23', uv: 2390, pv: 3800, sv:1000, tv: 3500, amt: 2500,
  },
  {
    name: 'July24', uv: 3490, pv: 4300, sv:1000, tv: 3705, amt: 2100,
  },
];

const dataHorizontal = [
  {
    name: 'Jun26', uv: 4000, pv: 2400, sv:1000, tv: 5090, amt: 2400,
  },
  {
    name: 'Jun27', uv: 3000, pv: 1398, sv:1000, tv: 5020, amt: 2210,
  },
  {
    name: 'Jun28', uv: 2000, pv: 9800, sv:1000, tv: 1500, amt: 2290,
  },
];


const Graphs = ({
  serpChart= false,
  interactionChart = false,
  googleChangeChart =false,
  serpPositionChart = false,
  serpKeywordChart = false,

}) => (
  <div>
    {serpChart &&
    <div className="graphs">
      <TrackGraph serps/>
      <div className="graph">
        <ResponsiveContainer  width={500}
           height={320}
          >
          <BarChart
            // width={500}
            // height={320}
            data={data}
            className="barGraph"
          >
            <CartesianGrid horizontal={false} strokeDasharray="2" stroke= "#41474C" />
            <XAxis dataKey="name"  />
            <YAxis hide={true}/>
            <Tooltip />
            <Bar dataKey="pv" stackId="a" fill="#feb342" barSize={10} />
            <Bar dataKey="uv" stackId="a" fill="#ffde62" />
            <Bar dataKey="sv" stackId="a" fill="#acd45e" />
            <Bar dataKey="tv" stackId="a" fill="#02851f" />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>}

    {interactionChart &&
    <div className="graphs">
      <TrackGraph interactions/>
      <div className="graph">
        <LineChart
          width={500}
          height={325}
          data={data}
        >
          <CartesianGrid horizontal={false} strokeDasharray="2" stroke= "#41474C" />
          <XAxis dataKey="name" />
          <YAxis hide={true}/>
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#6778dc" strokeWidth={2}
                activeDot={{ stroke: '#white', strokeWidth: 1, r: 1, fill: '#ff5f4a'}} dot={{ strokeWidth: 0, r: 0, fill: 'transparent'}} />
          <Line type="monotone" dataKey="uv" stroke="#71ccae" strokeWidth={2}
                activeDot={{ stroke: '#white', strokeWidth: 1, r: 1, fill: '#ff5f4a'}} dot={{ strokeWidth: 0, r: 0, fill: 'transparent'}} />
          <Line type="monotone" dataKey="sv" stroke="#3acbda" strokeWidth={2}
                activeDot={{ stroke: '#white', strokeWidth: 1, r: 1, fill: '#ff5f4a'}} dot={{ strokeWidth: 0, r: 0, fill: 'transparent'}} />
          <Line type="monotone" dataKey="tv" stroke="#f2a893" strokeWidth={2}
                activeDot={{ stroke: '#white', strokeWidth: 1, r: 1, fill: '#ff5f4a'}} dot={{ strokeWidth: 0, r: 0, fill: 'transparent'}} />
        </LineChart>
      </div>
    </div>}

    {googleChangeChart &&
    <div className="graphs">
      <TrackGraph googleChange/>
      <div className="graph">
        <LineChart
          width={500}
          height={250}
          data={data}
        >
          <CartesianGrid vertical={false} strokeDasharray="2" stroke= "#41474C" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip itemStyle={{color:"black"}} />
          <Line type="monotone" dataKey="pv" stroke="white" strokeWidth={2}
                activeDot={{ stroke: '#white', strokeWidth: 1, r: 1, fill: '#ff5f4a'}} dot={{ strokeWidth: 0, r: 0, fill: 'transparent'}} />
        </LineChart>
      </div>
    </div>}

    {serpPositionChart &&
    <div className="graphs">
      <TrackGraph serpsPosition/>
      <div className="graph">
        <ComposedChart
          width={500}
          height={270}
          margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
          data={data}
        >
          <CartesianGrid strokeDasharray="2" stroke= "#41474C" />
          <XAxis dataKey="name" >
            {/*<Label value="SERP Position" offset={-10} position="insideBottom"/>*/}
          </XAxis>
          <YAxis
            // label={{ value: 'Avg. Clicks', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Bar dataKey="pv" barSize={20} fill="#71CCAE" />
          <Line type="monotone" dataKey="uv" stroke="#6778DC" strokeWidth={3}
                activeDot={{ stroke: '#white', strokeWidth: 1, r: 1, fill: '#ff5f4a'}} dot={{ strokeWidth: 0, r: 0, fill: 'transparent'}} />
        </ComposedChart>
      </div>
    </div>}

    {serpKeywordChart &&
    <div className="graphs">
      <TrackGraph serpKeyword/>
      <div className="graph">
        <BarChart
          width={625}
          height={250}
          layout="vertical"
          data={dataHorizontal}
        >
          {/*<CartesianGrid horizontal={false} strokeDasharray="2" stroke= "#41474C" />*/}
          <XAxis type="number"/>
          <YAxis type="category"/>
          <Tooltip />
          <Legend/>
          <Bar dataKey="pv" stackId="a" fill="#feb342" barSize={30}/>
          <Bar dataKey="uv" stackId="a" fill="#ffde62" />
          <Bar dataKey="sv" stackId="a" fill="#acd45e" />
          <Bar dataKey="tv" stackId="a" fill="#02851f" />
        </BarChart>
      </div>
    </div>}
  </div>
);
export default Graphs;