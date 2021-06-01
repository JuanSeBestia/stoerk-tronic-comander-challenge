import { EventCommanderSensorRangeData } from "../../../../models/events";
import { Data } from "c3";
export function mapEventsToC3Columns(
  listSensors: EventCommanderSensorRangeData[]
): Data["columns"] {
  const dicTimeStamps: any = {};

  const listData: Data["columns"] = listSensors.map((sensor, indexSensor) => [
    `${sensor.controlunit}-${sensor.channel}`,
    ...sensor.values.map((event) => {
      if (!dicTimeStamps[event.timestamp as number])
        dicTimeStamps[event.timestamp as number] = event.timestamp;
      return event.value;
    }),
  ]);
  return [["x", ...(Object.values(dicTimeStamps) as number[])], ...listData];
}
