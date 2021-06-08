import React, { useMemo } from "react";

import {
  Chart,
  TimeframeSelectionPanel,
  LAST_24_HOURS,
  withSnackbar,
  TYPE_CHART_TIMELINE,
  // @ts-ignore
} from "stoerk-ui-components";
import { ChartProps } from "../chart.model";
import { mapEventsToSeries } from "./mapEventsToSeries";
const dataTimeLine = {
  Event01: {
    name: "Event01",
    unit: "C",
    data: [
      { start: 10, end: 100 },
      { start: 105, end: 200 },
    ],
  },
  Event02: {
    name: "Event02",
    unit: "C",
    data: [
      { start: 100, end: 500 },
      { start: 700, end: 900 },
    ],
  },
  Event03: {
    name: "Event03",
    unit: "C",
    data: [
      { start: 500, end: 800 },
      { start: 900, end: 2000 },
    ],
  },
  Event04: {
    name: "Event04",
    unit: "C",
    data: [
      { start: 50, end: 150 },
      { start: 700, end: 900 },
    ],
  },
};
export default function STGoogleSeries({ data }: ChartProps) {
  const series = useMemo(() => mapEventsToSeries(data), [data]);
  console.log({ series, dataTimeLine, data });

  return <Chart data={series} type={TYPE_CHART_TIMELINE} />;
}
