import moment from "moment";
import ReactApexChart from "react-apexcharts";

import "./Commander.scss";
import mockDataCommander from "./mock/mockDataCommander";

const options = {
  chart: {
    height: 350,
    type: "rangeBar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      barHeight: '90%',
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
      height: 800
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

const series = [
  {
    data: mockDataCommander,
  },
];

function Commander() {
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
    </div>
  );
}

export default Commander;
