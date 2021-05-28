import ReactApexChart from "react-apexcharts";
import { ChartProps } from "../../chart.model";
import options from "../config";
import React, { useMemo } from "react";
import mapEventToSeriesApexTimeLineChart from "../mapEventToSeriesApexBrushChart";

const optionsLine = {
  // ...options,

  chart: {
    id: "chart1",
    height: 130,
    type: "line",
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  // colors: ["#008FFB"],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    
  },
};

export default function ApexLine({ data }: ChartProps) {
  const series = useMemo(() => mapEventToSeriesApexTimeLineChart(data), [data]);
  console.log({ series });

  return (
    <ReactApexChart
      options={optionsLine}
      series={series}
      type="line"
      height={500}
    />
  );
}
