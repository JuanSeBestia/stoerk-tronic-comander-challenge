import ReactApexChart from "react-apexcharts";
import { ChartProps } from "../../chart.model";
import optionsConfig from "../config";
import React, { useMemo } from "react";
import rangeEventsToApexchartSeries from "./rangeEventsToApexchartSeries";

export default function ApexSeries({
  data,
  options,
}: ChartProps & { options?: any }) {
  const series = useMemo(() => rangeEventsToApexchartSeries(data), [data]);
  console.log({ series });

  return (
    <ReactApexChart
      options={{ ...optionsConfig, ...options }}
      series={[{ data: series }]}
      type="rangeBar"
      height={500}
    />
  );
}
