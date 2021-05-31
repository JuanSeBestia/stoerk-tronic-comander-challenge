import { BaseChartOptions } from "devextreme/viz/chart_components/base_chart";

import moment from "moment";
import {
  EventCommanderSensorRangeData,
  EventStateType,
} from "../../../models/events";

function mapEventsToLineDevExtreme(
  listSensors: EventCommanderSensorRangeData[]
) {
  const listSeries: string[] = [];
  const dicSensorData = listSensors.reduce(
    (dicAccumulated, sensor, indexSensor) => {
      sensor.values.forEach((event) => {
        // Merge data
        if (!dicAccumulated[String(event.timestamp)]) {
          dicAccumulated[String(event.timestamp)] = {
            timestamp: new Date(event.timestamp as number),
          };
        }
        dicAccumulated[String(event.timestamp)][
          `state-${sensor.controlunit}-${sensor.channel}`
        ] = event.valid ? EventStateType.ON : EventStateType.INVALID;
        dicAccumulated[String(event.timestamp)][
          `value-${sensor.controlunit}-${sensor.channel}`
        ] = event.value

        // ListKeyValues
        if (
          !listSeries.includes(`value-${sensor.controlunit}-${sensor.channel}`)
        )
          listSeries.push(`value-${sensor.controlunit}-${sensor.channel}`);

        return;
      });
      return dicAccumulated;
    },
    {} as any
  );
  return {
    mergedSeries: Object.values(dicSensorData) as any[],
    listSeries,
  };
}
export default mapEventsToLineDevExtreme;
