import React, { useMemo, useState } from "react";
import c3 from "c3";
import { ChartProps } from "../../chart.model";
import { mapEventsToC3Columns } from "./mapEventsToC3Columns";
import C3Chart from "./C3Chart";

export const C3LineBrush = ({ data }: ChartProps) => {
  const columns = useMemo(() => mapEventsToC3Columns(data), [data]);
  const [c3Chart, setC3Chart] = useState<c3.ChartAPI | null>(null);
  const config = useMemo(
    () => ({
      bindto: "#chart",
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
    }),
    [columns]
  );
  // @ts-ignore
  return <C3Chart {...config} />;
};
