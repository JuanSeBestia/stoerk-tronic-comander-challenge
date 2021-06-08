import React, { useMemo } from "react";

import {
  Chart,
  CommonSeriesSettings,
  Legend,
  SeriesTemplate,
  Animation,
  ArgumentAxis,
  Tick,
  Title,
  Subtitle,
} from "devextreme-react/chart";
import { ChartProps } from "../../chart.model";
import mapEventsToRangeDevExtreme from "../mapEventsToRangeDevExtreme";

function RangeTime({ data }: ChartProps) {
  const dataSource = useMemo(() => mapEventsToRangeDevExtreme(data), [data]);

  return (
    <Chart
      id="chart"
      dataSource={dataSource}
      barGroupPadding={0.2}
      rotated={true}
    >
      <ArgumentAxis categories={["States"]}>
        <Tick visible={false} />
      </ArgumentAxis>
      {/* @ts-ignore */}
      <Title text="Sensor Data TimeSerieRange" subtitle="Data maping to events" />
      <CommonSeriesSettings
        type="rangeBar"
        argumentField="controlunit-channel"
        rangeValue1Field="from"
        rangeValue2Field="to"
        barOverlapGroup="controlunit-channel"
      ></CommonSeriesSettings>
      <Legend verticalAlignment="bottom" horizontalAlignment="center">
        <Title text="States" />
      </Legend>
      <SeriesTemplate nameField="state" />
      <Animation enabled={false} />
    </Chart>
  );
}

export default RangeTime;
