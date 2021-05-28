import ApexBrush from "./Apex/ApexBrush";
import ApexLine from "./Apex/ApexLine";
import ApexLineTwoAxies from "./Apex/ApexLineTwoAxies";
import ApexSeries from "./Apex/ApexSeries";
import { MultiAxisLine } from "./ChartJS";

export const chartSeries = [
  { name: "ApexSeries", path: "series/ApexSeries", ChartComponent: ApexSeries },
];

export const chartLine = [
  { name: "ApexBrush", path: "line/ApexBrush", ChartComponent: ApexBrush },
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
];
