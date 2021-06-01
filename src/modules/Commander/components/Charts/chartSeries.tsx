import ApexBrush from "./Apex/ApexBrush";
import ApexBrushWithRange from "./Apex/ApexBrush/ApexBrushWithRange";
import ApexLine from "./Apex/ApexLine";
import ApexLineTwoAxies from "./Apex/ApexLineTwoAxies";
import ApexSeries from "./Apex/ApexSeries";
import { MultiAxisLine } from "./ChartJS";
import { C3LineBrush } from "./D3/C3";
import D3BarChart from "./D3/D3/D3BarChart";
import { D3Zoom } from "./D3/Zoom/D3Zoom";
import { ReactD3Line } from "./D3/Zoom/ReactD3Line";
import BrushDevExtreme from "./DevExtreme/BrushDevExtreme";
import RangeTime from "./DevExtreme/RangeTime";

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
  {
    name: "D3Zoom",
    path: "line/D3Zoom",
    ChartComponent: D3Zoom,
  },
  {
    name: "ReactD3Line",
    path: "line/ReactD3Line",
    ChartComponent: ReactD3Line,
  },
  {
    name: "D3BarChart",
    path: "line/D3BarChart",
    ChartComponent: D3BarChart,
  },
];
