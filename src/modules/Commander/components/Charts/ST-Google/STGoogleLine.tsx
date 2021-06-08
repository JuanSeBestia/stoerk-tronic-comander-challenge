import React, { useMemo } from "react";

import {
  Chart,
  TimeframeSelectionPanel,
  LAST_24_HOURS,
  withSnackbar,
  TYPE_CHART_LINECHART,
  // @ts-ignore
} from "stoerk-ui-components";
import { ChartProps } from "../chart.model";
import { mapEventsToLine } from "./mapEventsToLine";

export default function STGoogleLine({ data }: ChartProps) {
  const series = useMemo(() => mapEventsToLine(data), [data]);
  return <Chart data={series} />;
}
