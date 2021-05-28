import ReactApexChart from "react-apexcharts";
import { ChartProps } from "../../chart.model";
import options from "../config";
import React, { useMemo } from "react";
import mapEventToSeriesApexTimeLineChart from "../mapEventToSeriesApexBrushChart";

const optionsLine = {
  // ...options,

  chart: {
    animations: {
      enabled: false,
    },
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
  yaxis: [
    {
      title: {
        text: "Celcius (Cº)",
      },
    },
    {
      opposite: true,
      title: {
        text: "Percent (%)",
      },
    },
  ],
};

export default function ApexLineTwoAxies({ data }: ChartProps) {
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
