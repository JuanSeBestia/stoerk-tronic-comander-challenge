// data = TYPE_CHART_LINECHART (array = [{name, unit, data: [timestamp, val]}])
import moment from "moment";
import { EventCommanderSensorRangeData } from "../../../models/events";
import { COLORS } from "../chart.model";

export function mapEventsToLine(listSensors: EventCommanderSensorRangeData[]) {
  return listSensors.map((sensor, indexSensor) => ({
    name: `${sensor.controlunit}-${sensor.channel}-name`,
    unit: `${sensor.controlunit}-${sensor.channel}`,
    color: COLORS[indexSensor],
    data: sensor.values.map((event) => ({
      timestamp: event.timestamp,
      val: event.value,
    })),
  }));
}
