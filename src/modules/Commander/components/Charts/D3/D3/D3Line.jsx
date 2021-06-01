import React from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
import { appl } from "./data/appl";

const data = appl;

const D3Line = () => {
  const ref = useD3((svg) => {
    const focusHeight = 100;
    const height = 500;
    const width = 500;

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height - margin.bottom, margin.top]);

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

    const x = d3
      .scaleUtc()
      .domain(d3.extent(data, (d) => d.date))
      .range([margin.left, width - margin.right]);

    const xAxis = (g, x, height) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    const area = (x, y) =>
      d3
        .area()
        .defined((d) => !isNaN(d.value))
        .x((d) => x(d.date))
        .y0(y(0))
        .y1((d) => y(d.value));

    const focus = () => {
      const brush = d3
        .brushX()
        .extent([
          [margin.left, 0.5],
          [width - margin.right, focusHeight - margin.bottom + 0.5],
        ])
        .on("brush", brushed)
        .on("end", brushended);

      const defaultSelection = [
        x(d3.utcYear.offset(x.domain()[1], -1)),
        x.range()[1],
      ];

      svg.append("g").call(xAxis, x, focusHeight);

      svg
        .append("path")
        .datum(data)
        .attr("fill", "steelblue")
        .attr("d", area(x, y.copy().range([focusHeight - margin.bottom, 4])));

      const gb = svg.append("g").call(brush).call(brush.move, defaultSelection);

      function brushed({ selection }) {
        if (selection) {
          svg.property(
            "value",
            selection.map(x.invert, x).map(d3.utcDay.round)
          );
          svg.dispatch("input");
        }
      }

      function brushended({ selection }) {
        if (!selection) {
          gb.call(brush.move, defaultSelection);
        }
      }

      return svg.node();
    };
    const update = () => {
      const [minX, maxX] = focus();
      const maxY = d3.max(data, (d) =>
        minX <= d.date && d.date <= maxX ? d.value : NaN
      );

      chart.update(x.copy().domain(focus), y.copy().domain([0, maxY]));
    };

    const chart = (() => {
      const clipId = "test-id";

      svg
        .append("clipPath")
        .attr("id", "test-id")
        .append("rect")
        .attr("x", margin.left)
        .attr("y", 0)
        .attr("height", height)
        .attr("width", width - margin.left - margin.right);

      const gx = svg.append("g");

      const gy = svg.append("g");

      const path = svg
        .append("path")
        .datum(data)
        .attr("clip-path", `url(${window.location}#${clipId}`)
        .attr("fill", "steelblue");

      return Object.assign(svg.node(), {
        update(focusX, focusY) {
          gx.call(xAxis, focusX, height);
          gy.call(yAxis, focusY, data.y);
          path.attr("d", area(focusX, focusY));
        },
      });
    })();

    // update();

    console.log({ chart });
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

export default D3Line;
