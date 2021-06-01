import React, { useMemo, useState } from "react";
import c3 from "c3";
import { ChartProps } from "../../chart.model";
import { mapEventsToC3Columns } from "./mapEventsToC3Columns";

export const C3LineBrush = ({ data }: ChartProps) => {
  const columns = useMemo(() => mapEventsToC3Columns(data), [data]);

  React.useEffect(() => {
    const c3Chart = c3.generate({
      bindto: "#chart-c3",
      data: {
        x: "x",
        xFormat: "%Y",
        columns: columns,
      },
      axis: {
        x: {
          type: "timeseries",
          // if true, treat x value as localtime (Default)
          // if false, convert to UTC internally
          localtime: false,
          tick: {
            format: "%Y-%m-%d %H:%M:%S",
          },
        },
      },
      subchart: {
        show: true,
      },
    });
    return () => {
      c3Chart?.destroy();
    };
  }, [columns]);
  return <div id="chart-c3" />;
};
