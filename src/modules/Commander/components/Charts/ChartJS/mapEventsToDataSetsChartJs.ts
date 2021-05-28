import { EventCommanderSensorRangeData } from "../../../models/events";
import { COLORS } from "../chart.model";
import * as Utils from "./Util";

export function mapEventsToDataSetsChartJs(
  listSensors: EventCommanderSensorRangeData[]
) {
  return listSensors
    .map((sensor, indexSensor) => ({
      label: `${sensor.controlunit}-${sensor.channel}`,
      data: sensor.values.map((event) => ({
        x: new Date(event.timestamp as number),
        y: event.value,
      })),
      borderColor: COLORS[indexSensor],
      backgroundColor: Utils.transparentize(COLORS[indexSensor], 0.5),
    //   yAxisID: sensor.unit,
    }))
    
}
