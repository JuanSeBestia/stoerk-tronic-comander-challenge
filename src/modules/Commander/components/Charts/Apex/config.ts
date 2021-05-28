import moment from "moment";

const DATE_FORMAT = "MMM DD HH:mm:ss";
const STATE_COLORS: Record<string, string> = {
  On: "green",
  INVALID: "red",
  Off: "gray",
};

function diffDateFormat(from: moment.MomentInput, to: moment.MomentInput) {
  var a = moment(from);
  var b = moment(to);
  var diff = b.diff(a, "hours");
  // TODO: support I18n
  // TODO: support minutes, hours, days
  return "for " + diff + (diff > 1 ? " hours" : " hour");
}
// extracted from https://github.com/apexcharts/apexcharts.js/blob/a2ce1b8640626a1434248cd536d81f51de389762/src/charts/RangeBar.js#L403
function buildCustomTooltipHTML({
  color,
  seriesName,
  ylabel,
  start,
  end,
  diff,
}: any) {
  const ylabelColor = STATE_COLORS[ylabel];
  return (
    '<div class="apexcharts-tooltip-rangebar">' +
    '<div> <span class="series-name" style="color: ' +
    color +
    '">' +
    (seriesName ? seriesName : "") +
    '<span style="color:' +
    ylabelColor +
    ';"> : ' +
    ylabel +
    " <span> (" +
    diff +
    ")</span></span></span></div>" +
    "<div>" +
    '<span class="value start-value">' +
    start +
    '</span> <span class="separator">-</span> <span class="value end-value">' +
    end +
    "</span></div>" +
    "</div>"
  );
}

const options = {
  chart: {
    height: 350,
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
    enabled: false,
    // has a bug
    // formatter: function (val: [start: number, end: number], opts: any) {
    //   var a = moment(val[0]);
    //   var b = moment(val[1]);
    //   var diff = b.diff(a, "hours");
    //   // TODO: support I18n
    //   return diff + (diff > 1 ? " hours" : " hours");
    // },
    // style: {
    //   colors: ["#f3f4f5", "#fff"],
    //   height: 800,
    // },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    show: true,
  },
  tooltip: {
    x: {
      show: false,
      format: "dd MMM HH:mm",
    },
    y: {
      show: false,
    },
    custom: function (data: any) {
      const { series, seriesIndex, dataPointIndex, w } = data;
      // extracted from https://github.com/apexcharts/apexcharts.js/blob/a2ce1b8640626a1434248cd536d81f51de389762/src/charts/RangeBar.js#L12
      const color = w.globals.colors[seriesIndex];
      const seriesName = w.config.series[seriesIndex].data[dataPointIndex].x;
      const state = w.config.series[seriesIndex].data[dataPointIndex].state;
      const ylabel = state;
      const start = moment(
        w.globals.seriesRangeStart[seriesIndex][dataPointIndex]
      ).format(DATE_FORMAT);
      const end = moment(
        w.globals.seriesRangeEnd[seriesIndex][dataPointIndex]
      ).format(DATE_FORMAT);
      const diff = diffDateFormat(
        w.globals.seriesRangeStart[seriesIndex][dataPointIndex],
        w.globals.seriesRangeEnd[seriesIndex][dataPointIndex]
      );
      return buildCustomTooltipHTML({
        color,
        seriesName,
        ylabel,
        start,
        end,
        diff,
      });
      return (
        '<div class="arrow_box">' +
        "<span>" +
        series[seriesIndex][dataPointIndex] +
        "</span>" +
        "</div>"
      );
    },
  },
  grid: {
    row: {
      colors: ["#f3f4f5", "#fff"],
      opacity: 0.5,
    },
  },
};

export default options;
