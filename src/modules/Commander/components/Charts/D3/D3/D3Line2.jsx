import React from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
import { appl } from "./data/appl";

const data = appl;

const D3Line2 = () => {
  const ref = useD3((svg) => {
    var margin = { top: 20, right: 20, bottom: 110, left: 40 };
    var margin2 = { top: 430, right: 20, bottom: 30, left: 40 };
    var width = 500;
    var height = 500;
    var height2 = 200;

    var parseDate = d3.timeParse("%b %Y");

    var x = d3
      .scaleUtc()
      .domain(d3.extent(data, (d) => d.date))
      .range([margin.left, width - margin.right]);
    var x2 = d3
      .scaleUtc()
      .domain(d3.extent(data, (d) => d.date))
      .range([margin.left, width - margin.right]);
    var y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height - margin.bottom, margin.top]);
    var y2 = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([height2 - margin.bottom, margin.top]);
    const xAxis = (g, x, height) =>
    g.attr("transform", `translate(0,${height - margin.bottom})`).call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

    const xAxis2 = (g, x, height) =>
    g.attr("transform", `translate(0,${height - margin.bottom})`).call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

    const yAxis = (g, y, title) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .selectAll(".title")
            .data([title])
            .join("text")
            .attr("class", "title")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(title)
        );

    // var brush = d3
    //   .brushX()
    //   .extent([
    //     [0, 0],
    //     [width, height2],
    //   ])
    //   .on("brush end", brushed);

    // var zoom = d3
    //   .zoom()
    //   .scaleExtent([1, Infinity])
    //   .translateExtent([
    //     [0, 0],
    //     [width, height],
    //   ])
    //   .extent([
    //     [0, 0],
    //     [width, height],
    //   ])
    //   .on("zoom", zoomed);

    var area = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x(function (d) {
        return x(d.date);
      })
      .y0(y(0))
      .y1(function (d) {
        return y(d.value);
      });

    // var area2 = d3
    //   .area()
    //   .curve(d3.curveMonotoneX)
    //   .x(function (d) {
    //     return x2(d.date);
    //   })
    //   .y0(height2)
    //   .y1(function (d) {
    //     return y2(d.value);
    //   });

    svg
      .append("defs")
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

    // var focus = svg
    //   .append("g")
    //   .attr("class", "focus")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // var context = svg
    //   .append("g")
    //   .attr("class", "context")
    //   .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

    // function brushed(event) {
    //   if (event.sourceEvent && event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    //   var s = event.selection || x2.range();
    //   x.domain(s.map(x2.invert, x2));
    //   focus.select(".area").attr("d", area);
    //   focus.select(".axis--x").call(xAxis);
    //   svg
    //     .select(".zoom")
    //     .call(
    //       zoom.transform,
    //       d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
    //     );
    // }

    // function zoomed(event) {
    //   if (event.sourceEvent && event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    //   var t = event.transform;
    //   x.domain(t.rescaleX(x2).domain());
    //   focus.select(".area").attr("d", area);
    //   focus.select(".axis--x").call(xAxis);
    //   context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
    // }

    // function type(d) {
    //   d.date = parseDate(d.date);
    //   d.value = +d.value;
    //   return d;
    // }

    // Data
    x.domain(
      d3.extent(data, function (d) {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);
    x2.domain(x.domain());
    y2.domain(y.domain());

    // focus.append("path").datum(data).attr("class", "area").attr("d", area);

    // focus
    //   .append("g")
    //   .attr("class", "axis axis--x")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(xAxis);

    // focus.append("g").attr("class", "axis axis--y").call(yAxis);

    // context.append("path").datum(data).attr("class", "area").attr("d", area2);

    // context
    //   .append("g")
    //   .attr("class", "axis axis--x")
    //   .attr("transform", "translate(0," + height2 + ")")
    //   .call(xAxis2);

    // context
    //   .append("g")
    //   .attr("class", "brush")
    //   .call(brush)
    //   .call(brush.move, x.range());

    // svg
    //   .append("rect")
    //   .attr("class", "zoom")
    //   .attr("width", width)
    //   .attr("height", height)
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    //   .call(zoom);
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

export default D3Line2;
