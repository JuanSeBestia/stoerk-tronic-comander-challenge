import React, { useMemo } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
import { appl } from "./data/appl";
import { mapsEventsToD3 } from "./mapsEventsToD3";

// const data = appl.map((item) => ({ ...item, dateDate: new Date(item.date) }));

const D3Line3 = (props) => {
  const series = useMemo(() => mapsEventsToD3(props.data), [props.data]);
  const data = series[0].values;
  const ref = useD3((svg) => {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = svg.node().clientWidth - margin.left - margin.right,
      height = svg.node().clientHeight - margin.top - margin.bottom;
    // append the svg object to the body of the page
    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis --> it is a date format
    var x = d3
      .scaleTime()
      .domain(
        d3.extent(data, function (d) {
          return d.date;
        })
      )
      .range([margin.left, width]);

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var min = d3.min(
      series.map((sensor) =>
        d3.min(sensor.values, function (d) {
          return d.value;
        })
      )
    );
    var max = d3.max(
      series.map((sensor) =>
        d3.max(sensor.values, function (d) {
          return d.value;
        })
      )
    );

    var deltha_max = max - min;

    var y = d3
      .scaleLinear()
      .domain([min - 0.1 * deltha_max, max + 0.1 * deltha_max])
      .range([height, 0]);
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .attr("transform", "translate(" + margin.left + "," + 0 + ")");

    // Add the line

    series.forEach((sensor) => {
      var lineFunc = d3
        .line()
        .x(function (d) {
          return x(d.date);
        })
        .y(function (d) {
          return y(d.value);
        });
      svg
        .append("path")
        .attr("d", lineFunc(sensor.values))
        .attr("stroke", sensor.color)
        .attr("fill", "none");
    });
  }, []);
  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "20px",
        marginLeft: "20px",
      }}
    ></svg>
  );
};

export default D3Line3;
