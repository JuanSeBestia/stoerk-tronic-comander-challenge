import ApexBrush from "./Apex/ApexBrush";
import ApexLine from "./Apex/ApexLine";
import ApexSeries from "./Apex/ApexSeries";

export const chartSeries = [
  { name: "ApexSeries", path: "series/ApexSeries", ChartComponent: ApexSeries },
];

export const chartLine = [
  { name: "ApexBrush", path: "line/ApexBrush", ChartComponent: ApexBrush },
  { name: "ApexLine", path: "line/ApexLine", ChartComponent: ApexLine },
  
];
