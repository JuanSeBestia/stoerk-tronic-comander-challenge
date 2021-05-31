import ApexBrush from "./Apex/ApexBrush";
import ApexBrushWithRange from "./Apex/ApexBrush/ApexBrushWithRange";
import ApexLine from "./Apex/ApexLine";
import ApexLineTwoAxies from "./Apex/ApexLineTwoAxies";
import ApexSeries from "./Apex/ApexSeries";
import { MultiAxisLine } from "./ChartJS";
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
];
