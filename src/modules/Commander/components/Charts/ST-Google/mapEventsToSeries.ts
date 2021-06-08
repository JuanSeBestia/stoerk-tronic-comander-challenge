// data = TYPE_CHART_TIMELINE (object = { [eventId]: {name, id, data: [start, end]} })

import moment from "moment";
import { EventCommanderSensorRangeData } from "../../../models/events";
import { COLORS } from "../chart.model";

export function mapEventsToSeries(
  listSensors: EventCommanderSensorRangeData[]
) {
  return listSensors.reduce((accSensor, sensor, index) => {
    return {
      [`${sensor.controlunit}-${sensor.channel}`]: {
        name: `${sensor.controlunit}-${sensor.channel}-name`,
        id: `${sensor.controlunit}-${sensor.channel}`,
        unit: sensor.controlunit,
        data: sensor.rangesValues
          .filter((event) => event.valid)
          .map((event) => ({
            start: (event.from as number) / 1000,
            end: (event.to as number) / 1000,
          })),
      },
      ...accSensor,
    };
  }, {} as any);
}
