import ReactApexChart from "react-apexcharts";
import _ from "lodash";
import { ChartProps } from "../../chart.model";
import options from "../config";
import React, { useMemo } from "react";
import { BurstMode } from "@material-ui/icons";
import mapEventToSeriesApexTimeLineChart from "../mapEventToSeriesApexBrushChart";
import ApexSeries from "../ApexSeries";

const brushOptionsHelper = {
  chart: {
    id: "chart1",
    height: 130,
    type: "area",
    brush: {
      target: "chart2",
      enabled: true,
    },
    selection: {
      enabled: true,
      xaxis: {
        min: new Date("10 May 2021").getTime(),
        max: new Date("21 May 2021").getTime(),
      },
    },
  },
  // colors: ["#008FFB"],
  // fill: {
  //   type: "gradient",
  //   gradient: {
  //     opacityFrom: 0.91,
  //     opacityTo: 0.1,
  //   },
  // },
  // xaxis: {
  //   type: "datetime",
  //   tooltip: {
  //     enabled: false,
  //   },
  // },
  // yaxis: {
  //   tickAmount: 2,
  // },
};
const brushOptions = {
  ...options,

  chart: {
    id: "chart2",
    type: "line",
    height: 230,
    toolbar: {
      autoSelected: "pan",
      show: false,
    },
  },
  // colors: ["#546E7A"],
  stroke: {
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: true,
    // y: {
    //   formatter: function (val: any, another: any, ss: any) {
    //     console.log(val, another, ss);
    //     return val;
    //   },
    // },
  },
};

export default function ApexBrushWithRange({ data }: ChartProps) {
  const series = useMemo(() => mapEventToSeriesApexTimeLineChart(data), [data]);
  const comfigMemo = useMemo(() => {
    const copiedOpt = _.cloneDeep(brushOptionsHelper);
    copiedOpt.chart.selection.xaxis.max =
      series[0].data[Math.ceil((series[0].data.length / 4) * 3)].x;
    copiedOpt.chart.selection.xaxis.min =
      series[0].data[Math.ceil((series[0].data.length / 4) * 1)].x;
    return copiedOpt;
  }, [series]);
  console.log({ series });

  return (
    <div id="wrapper">
      <div id="chart-line2">
        <ReactApexChart
          options={brushOptions}
          series={series}
          type="line"
          height={500}
        />
      </div>
      <div id="chart-line">
        {/* <ReactApexChart
          options={comfigMemo}
          series={series}
          type="area"
          height={130}
        /> */}

        <ApexSeries
          data={data}
          options={comfigMemo}
        />
      </div>
    </div>
  );
}
