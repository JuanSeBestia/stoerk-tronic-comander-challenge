import moment from "moment";
import {
  EventCommanderRange,
  EventComponentType,
  EventStateType,
} from "../models/events";
import { SeriesApexChart } from "../models/seriesApexcharts";

const eventStateTypeColor: Record<EventStateType, string> = {
  [EventStateType.INVALID]: `#FF0000`,
  [EventStateType.OFF]: `#008FFB44`,
  [EventStateType.ON]: `#008FFB`,
};

function rangeEventsToApexchartSeries(
  dicEventRange: Record<EventComponentType, EventCommanderRange[]>
): SeriesApexChart[] {
  return Object.values(dicEventRange)
    .flatMap((x) => x)
    .map((event) => ({
      x: event.type,
      y: [moment(event.from).valueOf(), moment(event.to).valueOf()],
      fillColor: eventStateTypeColor[event.state],
    }));
}
export default rangeEventsToApexchartSeries;
