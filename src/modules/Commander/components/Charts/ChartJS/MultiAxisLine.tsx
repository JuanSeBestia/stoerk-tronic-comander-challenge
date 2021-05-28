import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { ChartProps } from "../chart.model";
import { mapEventsToDataSetsChartJs } from "./mapEventsToDataSetsChartJs";
import * as Utils from "./Util";

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

var timeFormat = "DD/MM/YYYY";
const options = {
  responsive: true,
  title: {
    display: true,
    text: "Chart.js Time Scale",
  },
  scales: {
    xAxes: {
      type: "time",
      time: {
        format: timeFormat,
        tooltipFormat: "ll",
      },
      scaleLabel: {
        display: true,
        labelString: "Date",
      },
    },

    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "value",
        },
      },
    ],
  },
  // interaction: {
  //   mode: "index",
  //   intersect: false,
  // },
  // stacked: false,
  // scales: {
  //   xAxes: [
  //     {
  //       type: "time",
  //       time: {
  //         format: "ll",
  //         tooltipFormat: "ll",
  //       },
  //       scaleLabel: {
  //         display: true,
  //         labelString: "Date",
  //       },
  //     },
  //   ],
  //   // y: {
  //   //   type: "linear",
  //   //   title: "Celcius (Cº)",
  //   //   display: true,
  //   //   position: "left",
  //   // },
  //   // y1: {
  //   //   type: "linear",
  //   //   title: "Percent (%)",
  //   //   display: true,
  //   //   position: "right",

  //   //   // grid line settings
  //   //   grid: {
  //   //     drawOnChartArea: false, // only want the grid lines for one axis to show up
  //   //   },
  //   // },
  // },

  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
      pan: {
        enabled: true,
        mode: "x",
      },
    },
  },
  maintainAspectRatio: false,
};

export const MultiAxisLine = ({ data }: ChartProps) => {
  const series = useMemo(() => mapEventsToDataSetsChartJs(data), [data]);
  const dataS = {
    datasets: series,
    // labels: series[0].data.map((item, index) => index),
  };
  console.log({ dataS });

  return (
    <div style={{ height: 300 }}>
      <Line
        data={dataS}
        width={100}
        height={300}
        options={options}
        type="line"
      />
    </div>
  );
};
