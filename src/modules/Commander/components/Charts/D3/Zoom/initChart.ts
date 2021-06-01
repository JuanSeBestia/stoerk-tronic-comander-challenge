import * as d3 from "d3";

const margin = { top: 20, right: 20, bottom: 30, left: 30 };
const height = 500;
const width = 500;

export function initChart() {
  console.log({ d3 });

  const data = Object.assign(
    d3.csvParse(
      `date,value
1988-01-01,12681
1988-01-02,13264
1988-01-03,13953
1988-01-04,13921
1988-01-05,13932
1988-01-06,13157
1988-01-07,11159
1988-01-08,11631
1988-01-09,12045
1988-01-10,13160
1988-01-11,14240
1988-01-12,14302
1988-01-13,14353
1988-01-14,14451`,
      d3.autoType
    ),
    { y: "Flights" }
  );

  const area = (data: any, x: any) =>
    d3
      .area()
      .curve(d3.curveStepAfter)
      .x((d) => {
        if (typeof x != "function") debugger;
        //@ts-ignore
        return x && x(d.date);
      })
      //@ts-ignore
      .y0(y(0))
      //@ts-ignore
      .y1((d) => y(d.value))(data);

  //@ts-ignore
  const yAxis = (g, y) =>
    g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, "s"))
      //@ts-ignore
      .call((g) => g.select(".domain").remove())
      //@ts-ignore
      .call((g) =>
        g
          .select(".tick:last-of-type text")
          .clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text(data.y)
      );
  //@ts-ignore
  const xAxis = (g, x) =>
    g.attr("transform", `translate(0,${height - margin.bottom})`).call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

  const y = d3
    .scaleLinear()
    //@ts-ignore
    .domain([0, d3.max(data, (d) => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const x = d3
    .scaleUtc()
    //@ts-ignore
    .domain(d3.extent(data, (d) => d.date))
    .range([margin.left, width - margin.right]);

  const zoomed = (event: any) => {
    const xz = event?.transform?.rescaleX(x);
    //@ts-ignore
    path.attr("d", area(data, xz));
    gx.call(xAxis, xz);
  };
  const zoom = d3
    .zoom()
    .scaleExtent([1, 32])
    .extent([
      [margin.left, 0],
      [width - margin.right, height],
    ])
    .translateExtent([
      [margin.left, -Infinity],
      [width - margin.right, Infinity],
    ])
    .on("zoom", zoomed);
  //@ts-ignore
  const svg = d3
    .select("#chart-d3")
    //@ts-ignore
    .append("svg")
    //@ts-ignore
    .attr("viewBox", [0, 0, width, height]);
  const clip = "clip-id-crazy";
  svg
    .append("clipPath")
    .attr("id", "clip-id-crazy")
    .append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom);
  const path = svg
    .append("path")
    .attr("clip-path", "url(#clip-id-crazy)")
    .attr("fill", "steelblue")
    //@ts-ignore
    .attr("d", area(data, x));
  const gx = svg.append("g").call(xAxis, x);
  svg.append("g").call(yAxis, y);
  svg
    //@ts-ignore
    .call(zoom)
    .transition()
    .duration(750)
    //@ts-ignore
    .call(zoom.scaleTo, 4, [x(Date.UTC(2001, 8, 1)), 0]);

  return svg.node();
}
