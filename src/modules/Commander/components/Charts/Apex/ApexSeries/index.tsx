import ReactApexChart from "react-apexcharts";
import { ChartProps } from "../../chart.model";
import options from "../config";
import React, { Component } from "react";

export default function ApexSeries({ data }: ChartProps) {
  return (
    <ReactApexChart
      options={options}
      series={data}
      type="rangeBar"
      height={500}
    />
  );
}
