import ApexBrush from "./Apex/ApexBrush";
import ApexBrushWithRange from "./Apex/ApexBrush/ApexBrushWithRange";
import ApexLine from "./Apex/ApexLine";
import ApexLineTwoAxies from "./Apex/ApexLineTwoAxies";
import ApexSeries from "./Apex/ApexSeries";
import { MultiAxisLine } from "./ChartJS";
import { C3LineBrush } from "./D3/C3";
import D3BarChart from "./D3/D3/D3BarChart";
import D3Line from "./D3/D3/D3Line";
import D3Line2 from "./D3/D3/D3Line2";
import D3Line3 from "./D3/D3/D3Line3";
import D3Line4 from "./D3/D3/D3Line4";
import { D3Zoom } from "./D3/Zoom/D3Zoom";
import { ReactD3Line } from "./D3/Zoom/ReactD3Line";
import BrushDevExtreme from "./DevExtreme/BrushDevExtreme";
import RangeTime from "./DevExtreme/RangeTime";
import STGoogleLine from "./ST-Google/STGoogleLine";

export const chartSeries = [
  { name: "ApexSeries", path: "series/ApexSeries", ChartComponent: ApexSeries },
  {
    name: "DevExtremeRangeTime",
    path: "series/DevExtremeRangeTime",
    ChartComponent: RangeTime,
  },
];

export const chartLine = [
  { name: "ApexBrush", path: "line/ApexBrush", ChartComponent: ApexBrush },
  {
    name: "ApexBrushWithRange",
    path: "line/ApexBrushWithRange",
    ChartComponent: ApexBrushWithRange,
  },
  { name: "ApexLine", path: "line/ApexLine", ChartComponent: ApexLine },
  {
    name: "ApexLine2Axies",
    path: "line/ApexLineTwoAxies",
    ChartComponent: ApexLineTwoAxies,
  },
  {
    name: "MultiAxisLine",
    path: "line/MultiAxisLine",
    ChartComponent: MultiAxisLine,
  },
  {
    name: "BrushDevExtreme",
    path: "line/BrushDevExtreme",
    ChartComponent: BrushDevExtreme,
  },
  {
    name: "C3Line",
    path: "line/C3Line",
    ChartComponent: C3LineBrush,
  },
  // {
  //   name: "D3Zoom",
  //   path: "line/D3Zoom",
  //   ChartComponent: D3Zoom,
  // },
  // {
  //   name: "ReactD3Line",
  //   path: "line/ReactD3Line",
  //   ChartComponent: ReactD3Line,
  // },
  // {
  //   name: "D3BarChart",
  //   path: "line/D3BarChart",
  //   ChartComponent: D3BarChart,
  // },
  // {
  //   name: "D3Line",
  //   path: "line/D3Line",
  //   ChartComponent: D3Line,
  // },
  // {
  //   name: "D3Line2",
  //   path: "line/D3Line2",
  //   ChartComponent: D3Line2,
  // },
  {
    name: "D3Line",
    path: "line/D3Line",
    ChartComponent: D3Line3,
  },
  // {
  //   name: "D3Line4 ",
  //   path: "line/D3Line4",
  //   ChartComponent: D3Line4,
  // },
  {
    name: "STGoogleLine",
    path: "line/STGoogleLine",
    ChartComponent: STGoogleLine,
  },
];
