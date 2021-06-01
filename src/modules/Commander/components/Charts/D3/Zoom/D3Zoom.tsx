import React, { useMemo, useState } from "react";
import { ChartProps } from "../../chart.model";
import { initChart } from "./initChart";

export const D3Zoom = ({ data }: ChartProps) => {
  // const columns = useMemo(() => mapEventsToC3Columns(data), [data]);

  React.useEffect(() => {
    initChart();
    return () => {
      // c3Chart?.destroy();
    };
  }, []);
  return <div id="chart-d3" />;
};
