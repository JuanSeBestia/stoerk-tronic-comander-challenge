import moment from "moment";
import sleepPromise from "../../../shared/utils/mock/sleepPromise";
import {
  EventCommanderSensorData,
  EventCommanderSensorRangeData,
} from "../models/events";
import { FilterState } from "../models/filters";
import eventsToRangeEvents from "./eventsToRangeEvents";
import { sensorData } from "./mock/sensorData";
// import sensorDataMonth from "./mock/sensorDataMonth.json";
import { sensorDataWeek } from "./mock/sensorDataWeek";

export const API_URL = "https://some-api.com/api/commander/events";

/**
 * API for SensorCommander
 */
const eventCommanderAPI = {
  getEvents: (
    filterState: FilterState
  ): Promise<EventCommanderSensorRangeData[]> =>
    sleepPromise(500)
      .then(() => {
        return sensorData;
        // return sensorDataWeek
        // return sensorDataMonth as EventCommanderSensorData[];
      })
      // Filter dates
      .then((sensorData) =>
        sensorData.map((sensor) => ({
          ...sensor,
          values: sensor.values.filter(
            (value) =>
              moment(filterState.dates.from).isSameOrBefore(
                moment(value.timestamp)
              ) &&
              moment(filterState.dates.to).isSameOrAfter(
                moment(value.timestamp)
              )
          ),
        }))
      )
      // TODO Filter components
      // TODO Filter state
      // Aggregate ranges
      .then((data) => eventsToRangeEvents(data, 60 * 5))
      .then((data) => {
        console.log("eventCommanderAPI:", { data });
        return data;
      }),
};
export default eventCommanderAPI;
