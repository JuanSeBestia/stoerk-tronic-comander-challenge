import { EventCommanderSensorRangeData } from "../../../../models/events";
import { COLORS } from "../../chart.model";


export function mapsEventsToD3(listSensors: EventCommanderSensorRangeData[]) {
  return listSensors.map((sensor, indexSensor) => ({
    name: `${sensor.controlunit}-${sensor.channel}`,
    color: COLORS[indexSensor],
    values: sensor.values.map((event) => ({
      date: new Date(event.timestamp as number),
      value: event.value,
    })),
  }));
}
