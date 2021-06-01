import * as d3 from "d3";
import { scaleBand, scaleLinear } from "d3-scale";
import moment from "moment";
const createLineChart = (data, id) => {
  const node = document.querySelector("#" + id);
  const margin = data.margins,
    width = data.width - margin.left - margin.right,
    height = data.height - margin.top - margin.bottom;

  const formatDate = (date) => moment(date).format("%d-%b-%y");

  const x = scaleBand().range([0, width]);

  const y = scaleLinear().range([height, 0]);

  const xAxis = d3.svg.axis().scale(x).orient(data.orientXTicks);

  const yAxis = d3.svg.axis().scale(y).orient(data.orientYTicks);

  const line = d3.svg
    .line()
    .x((d) => x(d.time))
    .y((d) => y(d.value));

  const svg = d3
    .select(node)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  data.dataset.map((el) => {
    if (typeof el.time === "string") {
      el.time = formatDate.parse(el.time);
      el.value = +el.value;
    }
  });

  const lineChartParse = (data) => {
    console.log("lineChartParse", { data });
    data.time = formatDate.parse(data.time);
    data.value = +data.value;
    return data;
  };

  const setLineChartData = (error, dataset) => {
    if (error) throw error;

    x.domain(d3.extent(dataset, (d) => d.time));
    y.domain(d3.extent(dataset, (d) => d.value));

    svg
      .append("g")
      .attr("class", data.XAxisClasses)
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("class", data.YAxisClasses)
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(data.YAxisLabel);

    svg
      .append("path")
      .datum(dataset)
      .attr("class", data.lineClass)
      .attr("d", line);

    return node;
  };

  return setLineChartData(false, data.dataset, data);
};

export default createLineChart;
