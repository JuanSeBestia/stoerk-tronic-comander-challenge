import React from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
import { appl } from "./data/appl";

const data = appl.map((item) => ({ ...item, dateDate: new Date(item.date) }));

const D3Line4 = () => {
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

    // BRUSHHHH
    var focus = svg
      .append("g")
      .attr("class", "focus")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var context = svg
      .append("g")
      .attr("class", "context")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    function brushed(event) {
      if (event.sourceEvent && event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
      var s = event.selection || x.range();
      x.domain(s.map(x.invert, x));
      // focus.select(".area").attr("d", area);
      // focus.select(".axis--x").call(xAxis);
      svg
        .select(".zoom")
        .call(
          zoom.transform,
          d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
        );
    }

    function zoomed(event) {
      if (event.sourceEvent && event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
      var t = event.transform;
      x.domain(t.rescaleX(x).domain());
      // focus.select(".area").attr("d", area);
      // focus.select(".axis--x").call(xAxis);
      context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
    }

    var brush = d3
      .brushX()
      .extent([
        [0, 0],
        [width, height],
      ])
      .on("brush end", brushed);

    var zoom = d3
      .zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .extent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", zoomed);

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

    // Rush focus
    focus.append("path").datum(data).attr("class", "area")
    // .attr("d", area);

    focus
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")");
    // .call(xAxis);

    // focus.append("g").attr("class", "axis axis--y").call(yAxis);

    // context.append("path").datum(data).attr("class", "area").attr("d", area2);

    context.append("g").attr("class", "axis axis--x");
    // .attr("transform", "translate(0," + height2 + ")")
    // .call(xAxis2);

    context
      .append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());

    svg
      .append("rect")
      .attr("class", "zoom")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(zoom);
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

export default D3Line4;
