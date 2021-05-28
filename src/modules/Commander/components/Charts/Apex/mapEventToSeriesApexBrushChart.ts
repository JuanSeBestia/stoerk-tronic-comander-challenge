import moment from "moment";
import _ from "lodash";
import {
  EventCommanderSensorRangeData,
  EventStateType,
  // EventCommanderRange,
} from "../../../models/events";
import { COLORS } from "../chart.model";
import { TimeLineApexChart } from "./TimeLineApexcharts.model";

const mockDates = [
  {
    x: "02-10-2017 GMT",
    y: 34,
  },
  {
    x: "02-11-2017 GMT",
    y: 43,
  },
  {
    x: "02-12-2017 GMT",
    y: 31,
  },
  {
    x: "02-13-2017 GMT",
    y: 43,
  },
  {
    x: "02-14-2017 GMT",
    y: 33,
  },
  {
    x: "02-15-2017 GMT",
    y: 52,
  },
];
function mapEventToSeriesApexTimeLineChart(
  listSensors: EventCommanderSensorRangeData[]
){
  return listSensors.map((sensor, indexSensor) => ({
    name: `${sensor.controlunit}-${sensor.channel}`,
    unit: sensor.unit,
    // data: mockDates
    data: sensor.values.map((event) => ({
      x: event.timestamp as number,
      y: event.value,
      fillColor: event.valid ? COLORS[indexSensor] : COLORS[indexSensor] + "66",
      state: event.valid ? EventStateType.ON : EventStateType.INVALID,
    })),
    // data: sensor.values.map((event) => ({
    //   x: event.timestamp,
    //   y: event.value,
    //   // fillColor: event.valid ? COLORS[indexSensor] : COLORS[indexSensor] + "66",
    //   // state: event.valid ? EventStateType.ON : EventStateType.INVALID,
    // })),
  }));
}
export default mapEventToSeriesApexTimeLineChart;

function sampleOrdered<T>(list: T[], size: number) {
  const sampleTime = Math.floor(list.length / size);
  return list.filter((item, index) => index % sampleTime == 0);
}
