import ReactApexChart from "react-apexcharts";
import { ChartProps } from "../../chart.model";
import options from "../config";
import React, { useMemo } from "react";
import rangeEventsToApexchartSeries from "./rangeEventsToApexchartSeries";

export default function ApexSeries({ data }: ChartProps) {
  const series = useMemo(() => rangeEventsToApexchartSeries(data), [data]);
  console.log({ series });

  return (
    <ReactApexChart
      options={options}
      series={[{ data: series }]}
      type="rangeBar"
      height={500}
    />
  );
}