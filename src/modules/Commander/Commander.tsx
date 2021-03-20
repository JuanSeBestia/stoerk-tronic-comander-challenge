import _ from "lodash";
import moment from "moment";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import rangeEventsToApexchartSeries from "./business-logic/rangeEventsToApexchartSeries";

import "./Commander.scss";
import useEventCommanderRange from "./state/useEventCommanderRange";

const options = {
  chart: {
    height: 350,
    type: "rangeBar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      barHeight: "90%",
      dataLabels: {
        hideOverflowingLabels: false,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: [start: number, end: number], opts: any) {
      var a = moment(val[0]);
      var b = moment(val[1]);
      var diff = b.diff(a, "hours");
      // TODO: support I18n
      return diff + (diff > 1 ? " hours" : " hours");
    },
    style: {
      colors: ["#f3f4f5", "#fff"],
      height: 800,
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    show: true,
  },
  grid: {
    row: {
      colors: ["#f3f4f5", "#fff"],
      opacity: 0.5,
    },
  },
};

// optimizing state
const getSeries = _.memoize((eventCommanderRangeList) => [
  {
    data: rangeEventsToApexchartSeries(eventCommanderRangeList),
  },
]);

function Commander() {
  const [eventCommanderRangeList, loading, error] = useEventCommanderRange();
  const series = getSeries(eventCommanderRangeList);
  return (
    <div className="Commander">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height={500}
        />
      </div>
      <div>{JSON.stringify({ loading, error })}</div>
    </div>
  );
}

export default Commander;
