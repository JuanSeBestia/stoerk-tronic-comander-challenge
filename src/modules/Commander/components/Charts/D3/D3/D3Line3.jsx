import React from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
import { appl } from "./data/appl";

const data = appl.map((item) => ({ ...item, dateDate: new Date(item.date) }));

const D3Line3 = () => {
  const ref = useD3((svg) => {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = svg.node().clientWidth - margin.left - margin.right,
      height = svg.node().clientHeight - margin.top - margin.bottom;
    debugger;
    // append the svg object to the body of the page
    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis --> it is a date format
    var x = d3
      .scaleTime()
      .domain(
        d3.extent(data, function (d) {
          return d.dateDate;
        })
      )
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return +d.value;
        }),
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.dateDate);
          })
          .y(function (d) {
            return y(d.value);
          })
      );
  }, []);
  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    ></svg>
  );
};

export default D3Line3;
