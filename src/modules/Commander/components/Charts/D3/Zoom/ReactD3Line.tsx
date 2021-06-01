import React, { useMemo, useState } from "react";
import 'c3/c3.css';
import { ChartProps } from "../../chart.model";
// @ts-ignore
// import rd3 from "react-d3-library";
// @ts-ignore
// import d3DataToJSX from "../../../../../../shared/lib/react-d3/d3DataToJSX";

// @ts-ignore
// import ChildComponent from "react-d3-library/lib/d3Components/ChildComponent";
// @ts-ignore
// import createLineChart from "react-d3-library/lib/charts/createLineChart";
import createLineChart from "../../../../../../shared/lib/charts/createLineChart";

// const LineChart = rd3.LineChart;
// console.log({ rd3 });
// import { initChart } from "./initChart";
const data: any = {};
data.width = 500;
data.height = 750;
data.dataset = [
  { time: "24-Apr-07", value: 93.24 },
  { time: "25-Apr-07", value: 95.35 },
  { time: "26-Apr-07", value: 98.84 },
  { time: "27-Apr-07", value: 99.92 },
  { time: "30-Apr-07", value: 99.8 },
  { time: "1-May-07", value: 99.47 }
];
data.margins = { top: 20, right: 10, bottom: 0, left: 10 };
data.orientXTicks = "bottom";
data.orientYTicks = "left";
data.XAxisClasses = "lineChartX lineChartAxis";

data.YAxisClasses = "lineChartY lineChartAxis";
data.lineClass = "lineChart";


export const ReactD3Line = (props: ChartProps) => {
  // const columns = useMemo(() => mapEventsToC3Columns(data), [data]);

    React.useEffect(() => {
        let d3Data = createLineChart(data,"chart-d3");

        console.log({ d3Data });
        
      return () => {
        // c3Chart?.destroy();
      };
    }, []);
  return (
    <div id="chart-d3">
      THERE
      {/* <LineChart data={data} /> */}
    </div>
  );
};
