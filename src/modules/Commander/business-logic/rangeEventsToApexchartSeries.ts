import moment from "moment";
import {
  EventCommanderRange,
  EventComponentType,
  EventStateType,
} from "../models/events";
import { SeriesApexChart } from "../models/seriesApexcharts";

const OFF_COLOR = "#75757533";
const DEVICE_COLOR = `#5189C8`;
const COMPRESSOR_COLOR = `#8973D6`;
const FAN_COLOR = `#F2BB38`;
const LIGHT_COLOR = `#72E8A7`;

const eventStateTypeColor: Record<
  EventComponentType,
  Record<EventStateType, string>
> = {
  [EventComponentType.DEVICE]: {
    [EventStateType.OFF]: OFF_COLOR,
    [EventStateType.ON]: DEVICE_COLOR,
    // opacity 40%
    [EventStateType.INVALID]: DEVICE_COLOR + "66",
  },
  [EventComponentType.COMPRESSOR]: {
    [EventStateType.OFF]: OFF_COLOR,
    [EventStateType.ON]: COMPRESSOR_COLOR,
    // opacity 40%
    [EventStateType.INVALID]: COMPRESSOR_COLOR + "66",
  },
  [EventComponentType.FAN]: {
    [EventStateType.OFF]: OFF_COLOR,
    [EventStateType.ON]: FAN_COLOR,
    // opacity 40%
    [EventStateType.INVALID]: FAN_COLOR + "66",
  },
  [EventComponentType.LIGHT]: {
    [EventStateType.OFF]: OFF_COLOR,
    [EventStateType.ON]: LIGHT_COLOR,
    // opacity 40%
    [EventStateType.INVALID]: LIGHT_COLOR + "66",
  },
};

function rangeEventsToApexchartSeries(
  dicEventRange: Record<EventComponentType, EventCommanderRange[]>
): SeriesApexChart[] {
  return Object.values(dicEventRange)
    .flatMap((x) => x)
    .map((event) => ({
      x: event.type,
      y: [moment(event.from).valueOf(), moment(event.to).valueOf()],
      fillColor: eventStateTypeColor[event.type][event.state],
      state: event.state,
    }));
}
export default rangeEventsToApexchartSeries;
