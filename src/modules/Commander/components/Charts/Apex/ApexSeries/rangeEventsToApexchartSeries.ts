import moment from "moment";
import {
  EventCommanderSensorRangeData,
  EventStateType,
  // EventCommanderRange,
} from "../../../../models/events";
import { COLORS } from "../../chart.model";
import { SeriesApexChart } from "./seriesApexcharts.model";

function rangeEventsToApexchartSeries(
  listSensors: EventCommanderSensorRangeData[]
): SeriesApexChart[] {
  return listSensors.flatMap((sensor, indexSensor) =>
    sensor.rangesValues.map((event) => ({
      x: `${sensor.controlunit}-${sensor.channel}`,
      y: [moment(event.from).valueOf(), moment(event.to).valueOf()],
      fillColor: event.valid ? COLORS[indexSensor] : COLORS[indexSensor] + "66",
      state: event.valid ? EventStateType.ON : EventStateType.INVALID,
    }))
  );
}
export default rangeEventsToApexchartSeries;
